import { handleClick } from "../render";

const HomeTemplate = () => {
  return `
  <div class="home-container">
    <div class="title-box">
      <div>
        <svg
          class="logoImage"
          width="120"
          height="146"
          viewBox="0 0 60 73"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M34.8333 73H25.25V59.4038H0L15.75 34.4013H7.83333L30 0L52.1667 34.4013H44.3333L60 59.4038H34.8333V73ZM9.66667 53.9288H25.4167H17.9167H42.0833H34.6667H50.4167H9.66667ZM9.66667 53.9288H50.4167L34.6667 28.9263H42.0833L30 10.1288L17.9167 28.9263H25.4167L9.66667 53.9288Z"
            fill="#A7D81C"
          />
        </svg>
      </div>
      <h1>DomX-ray</h1>
    </div>
    <form>
      <label for="searchInput">
        <input
          type="url"
          name="searchUrl"
          id="searchUrl"
          value=""
          placeholder="https://www.google.com"
          autocomplete="off"
          required
        />
        <button type="click" class="submit-input" route="/visualization"></button>
      </label>
    </form>
  </div>
  `;
};

const HomeScript = () => {
  const searchForm = document.querySelector("button");
  searchForm.addEventListener("click", handleClick);
};

const HomePage = { template: HomeTemplate, script: HomeScript };

export default HomePage;
