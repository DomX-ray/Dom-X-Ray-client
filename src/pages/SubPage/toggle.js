const collapsibleTag = () => {
  const collapseList = document.getElementsByClassName("collapsible");

  for (let i = 0; i < collapseList.length; i++) {
    collapseList[i].addEventListener("click", function () {
      this.classList.toggle("active");
      const content = this.nextElementSibling;

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
};

export default collapsibleTag;
