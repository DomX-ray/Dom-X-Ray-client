import HomePage from "../view/HomePage";
import SubPage from "../view/SubPage";

const routes = {
  "/": HomePage,
  "/visualization": SubPage,
};

const mainElement = document.querySelector("main");

const renderHtml = (state) => {
  if (!state) {
    mainElement.innerHTML = "존재하지 않는 페이지입니다";
    return;
  }

  mainElement.innerHTML = routes[state].template();
  routes[state].script();

  const searchForm = document.querySelector("button");
  searchForm.addEventListener("click", handleSearchButtonClick);
};

export const initialize = () => {
  window.history.replaceState("/", null, "");
  renderHtml("/");
};

export const handleSearchButtonClick = (event) => {
  try {
    const route = event.target.getAttribute("route");
    const searchUrl = document.getElementById("searchUrl").value;

    if (!searchUrl) {
      throw new Error();
    }

    window.history.pushState({ route, searchUrl }, null, route);

    renderHtml(route);

    window.onpopstate = (event) => {
      if (event.state) {
        renderHtml(event.state);
      }
    };
  } catch {
    alert("올바른 URL를 입력하세요");
  }
};
