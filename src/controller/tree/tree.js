import * as d3 from "d3";

import { connector, collapse, expand } from "./controlTree";

const renderTree = (data) => {
  let tree = d3.tree;
  const margin = {
    top: 20,
    right: 10,
    bottom: 20,
    left: 10,
  };
  let width = 1000 - margin.right - margin.left;
  let height = 600 - margin.top - margin.bottom;
  let barHeight = 20;
  let i = 0;
  let duration = 750;

  tree = tree().nodeSize([0, 150]);

  const root = tree(d3.hierarchy(data));

  root.each((d) => {
    d.name = d.id;
    d.id = i;
    i++;
  });

  root.x0 = root.x;
  root.y0 = root.y;

  const svg = d3
    .select(".hierarchy-container")
    .append("svg")
    // .attr("viewBox", [0.5, -30.5, width, height + 30])
    .attr("width", width + margin.right + margin.left)
    .attr("height", height)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  root.children.forEach(collapse);
  update(root);

  function click(event, d) {
    if (event.defaultPrevented) return;

    if (d.children) {
      d._children = d.children;
      d.children = null;
    } else {
      d.children = d._children;
      d._children = null;
    }
    update(d);
  }

  document.querySelector(".expand-button").addEventListener("click", expandAll);

  document
    .querySelector(".collapse-button")
    .addEventListener("click", collapseAll);

  function expandAll() {
    expand(root);
    update(root);
  }

  function collapseAll() {
    root.children.forEach(collapse);
    collapse(root);
    update(root);
  }

  function hoverAction() {
    d3.select(this);
    document.getElementById("tagName").textContent =
      this.querySelector("title").textContent;
    document.getElementById("tagId").textContent =
      this.querySelector("tagId").textContent;
    document.getElementById("textContent").textContent =
      this.querySelector("textContent").textContent;
    document.getElementById("childrenCount").textContent =
      this.querySelector("childrenCount").textContent;
    document.getElementById("className").textContent =
      this.querySelector("className").textContent;
    if (!!className) {
      document.getElementById("classToggle").open = true;
    }
  }

  function mouseout() {
    d3.select(this).select("text.hover").remove();
    document.getElementById("tagName").innerHTML = "";
    document.getElementById("tagId").innerHTML = "";
    document.getElementById("textContent").innerHTML = "";
    document.getElementById("childrenCount").innerHTML = "";
    document.getElementById("className").innerHTML = "";
    document.getElementById("classToggle").open = false;
  }

  const handleZoom = (e) => {
    console.log(e);
    svg.attr("transform", e.transform);
  };

  const zoom = d3.zoom().scaleExtent([1, 8]).on("zoom", handleZoom);

  svg.call(zoom);

  function update(source) {
    let nodes = tree(root);
    let nodesSort = [];

    nodes.eachBefore(function (n) {
      nodesSort.push(n);
    });

    height = Math.max(500, nodesSort.length * barHeight * 10);

    let links = nodesSort.slice(1);

    nodesSort.forEach((n, i) => {
      n.x = i * barHeight * 5;
    });

    d3.select(".hierarchy-container > svg")
      .transition()
      .duration(duration)
      .attr("height", height);

    let node = svg.selectAll("g.node").data(nodesSort, function (d) {
      return d.id || (d.id = ++i);
    });

    let nodeEnter = node
      .enter()
      .append("g")
      .attr("class", "node")
      .attr("transform", () => `translate(${source.y0 + 100},${source.x0})`)
      .on("click", click)
      .on("mouseover", hoverAction)
      .on("mouseout", mouseout);

    nodeEnter
      .append("rect")
      .attr("width", 100)
      .attr("height", 40)
      .style("fill", function (d) {
        return d._children ? "rgb(184, 212, 106)" : "#fff";
      });

    nodeEnter
      .append("text")
      .attr("x", function (d) {
        return d.children || d._children ? 10 : 10;
      })
      .attr("dy", "1.5em")
      .attr("text-anchor", function (d) {
        return d.children || d._children ? "start" : "start";
      })
      .text(function (d) {
        if (d.data.tagName.length > 20) {
          return d.data.tagName.substring(0, 20) + "...";
        } else {
          return d.data.tagName;
        }
      })
      .style("fill-opacity", 1e-6);

    nodeEnter.append("svg:title").text(function (d) {
      return d.data.tagName;
    });

    nodeEnter.append("svg:className").text(function (d) {
      const className = d.data.className.split(" ");
      return className;
    });

    nodeEnter.append("svg:tagId").text(function (d) {
      return d.data.id;
    });

    nodeEnter.append("svg:childrenCount").text(function (d) {
      return d.data.childrenCount;
    });

    nodeEnter.append("svg:textContent").text(function (d) {
      if (d.data.textContent.length > 20) {
        d.data.textContent.substring(0, 20) + "...";
        return d.data.textContent;
      } else {
        return d.data.textContent;
      }
    });

    let nodeUpdate = node.merge(nodeEnter).transition().duration(duration);

    nodeUpdate.attr("transform", function (d) {
      return "translate(" + (d.y + 100) + "," + d.x + ")";
    });

    nodeUpdate
      .select("rect")
      .attr("width", 100)
      .attr("height", 40)
      .attr("stroke", "#131417")
      .style("fill", function (d) {
        return d._children ? "rgb(184, 212, 106)" : "#fff";
      });

    nodeUpdate.select("text").style("fill-opacity", 1);

    let nodeExit = node.exit().transition().duration(duration);

    nodeExit
      .attr("transform", () => `translate(${source.y + 100},${source.x})`)
      .remove();

    nodeExit.select("rect").attr("width", 100).attr("height", 40);

    nodeExit.select("text").style("fill-opacity", 1e-6);

    let link = svg.selectAll("path.link").data(links, function (d) {
      const id = d.id + "->" + d.parent.id;
      return id;
    });

    let linkEnter = link
      .enter()
      .insert("path", "g")
      .attr("class", "link")
      .style("stroke-dasharray", "6, 6")
      .style("stroke", "#ff3c3c")
      .attr("d", () => {
        const o = {
          x: source.x0,
          y: source.y0,
          parent: { x: source.x0, y: source.y0 },
        };

        return connector(o);
      });

    link.merge(linkEnter).transition().duration(duration).attr("d", connector);

    link
      .exit()
      .transition()
      .duration(duration)
      .attr("d", () => {
        const o = {
          x: source.x,
          y: source.y,
          parent: { x: source.x, y: source.y },
        };
        return connector(o);
      })
      .remove();

    nodesSort.forEach(function (d) {
      d.x0 = d.x;
      d.y0 = d.y;
    });
  }
};

export default renderTree;
