import HomePage from "./pages/HomePage";
import SubPage from "./pages/SubPage/index";

const routes = {
  "/": HomePage,
  "/visualization": SubPage,
};

const mainElement = document.querySelector("main");

const renderHtml = (state) => {
  mainElement.innerHTML = routes[state].template();
  routes[state].script();
};

window.onpopstate = (event) => {
  if (event.state) {
    renderHtml(event.state);
  }
};

window.onload = () => {
  (function initialize() {
    window.history.replaceState("/", "home", "");
    renderHtml("/");
  })();
};

export const handleClick = (event) => {
  const route = event.target.getAttribute("route");
  const searchUrl = document.getElementById("searchUrl").value;

  window.history.pushState({ route, searchUrl }, route, "");
  renderHtml(route);
};
