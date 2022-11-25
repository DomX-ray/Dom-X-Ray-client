import { getParsedData } from "../../util/api";
import renderTree from "./tree";
import collapsibleTag from "./toggle";
import { renderHtml } from "../../render";

const SubTemplate = () => {
  return `
  <header>
    <div class="header-container">
    <svg width="37" height="46" viewBox="0 0 37 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.4806 46H15.5708V37.4325H0L9.7125 21.6775H4.83056L18.5 0L32.1694 21.6775H27.3389L37 37.4325H21.4806V46ZM5.96111 33.9825H15.6736H11.0486H25.9514H21.3778H31.0903H5.96111ZM5.96111 33.9825H31.0903L21.3778 18.2275H25.9514L18.5 6.3825L11.0486 18.2275H15.6736L5.96111 33.9825Z" fill="#A7D81C"/>
    </svg>
      <h1 class="title">Dom X-ray</h1>
      <form class="search-form-box">
        <input type="url" class="subPage-input" name="searchUrl" value="" autocomplete="off" required />
        <button type="click" class="submit-input" route="/visualization"></button>
      </form>
    </div>
  </header>
  <div class="main-container">
    <div class="loader-container">
      <div class="loader">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">
          <><rect x="0" y="10" width="4" height="10" fill="#333" opacity="0.2">
            <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0s" dur="0.6s" repeatCount="indefinite" />
            <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0s" dur="0.6s" repeatCount="indefinite" />
            <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0s" dur="0.6s" repeatCount="indefinite" />
          </rect><rect x="8" y="10" width="4" height="10" fill="#333" opacity="0.2">
            <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
            <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
            <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.15s" dur="0.8s" repeatCount="indefinite" />
          </rect><rect x="16" y="10" width="4" height="10" fill="#333" opacity="0.2">
            <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
            <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
            <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
          </rect></>
        </svg>
      </div>
    </div>
    <div class="control-button-container">
      <button class="expand-button">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.75 6.24998L6.24998 18.75M9.37498 22.9166H15.625C20.8333 22.9166 22.9166 20.8333 22.9166 15.625V9.37498C22.9166 4.16665 20.8333 2.08331 15.625 2.08331H9.37498C4.16665 2.08331 2.08331 4.16665 2.08331 9.37498V15.625C2.08331 20.8333 4.16665 22.9166 9.37498 22.9166Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18.75 10.4167V6.25H14.5833M6.25 14.5833V18.75H10.4167"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <button class="collapse-button" onclick="collapseAll()">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.33331 12.5H16.6666M9.37498 22.9166H15.625C20.8333 22.9166 22.9166 20.8333 22.9166 15.625V9.37498C22.9166 4.16665 20.8333 2.08331 15.625 2.08331H9.37498C4.16665 2.08331 2.08331 4.16665 2.08331 9.37498V15.625C2.08331 20.8333 4.16665 22.9166 9.37498 22.9166Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
    <div class="hierarchy-container"></div>
    <div class="tag-info-container">
      <ul>
        <li>
          <span class="tag-info-item">Tag name</span>
          <span class="tag-info-box" id="tagName"></span>
        </li>
        <li>
          <span class="tag-info-item">Id</span>
          <span class="tag-info-box"></span>
        </li>
        <li>
          <span class="tag-info-item">Contents</span>
          <span class="tag-info-box"></span>
        </li>
        <li>
          <span class="tag-info-item">Children</span>
          <span class="tag-info-box"></span>
        </li>
        <li>
          <span class="tag-info-item">Depth</span>
          <span class="tag-info-box"></span>
        </li>
        <li style="display: list-item">
          <span class="tag-info-item">Class name</span>
          <button class="tag-info-toggle-box collapsible"></button>
          <div class="content">
            <ul>
              <li>a</li>
              <li>b</li>
              <li>c</li>
            </ul>
          </div>
        </li>
        <li style="display: list-item">
          <span class="tag-info-item">Attributes</span>
          <button class="tag-info-toggle-box collapsible"></button>
          <div class="content">
            <ul>
              <li>a</li>
              <li>b</li>
              <li>c</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>`;
};

const showSpinner = () => {
  document.getElementsByClassName("loader")[0].style.display = "inline-block";
};

const hideSpinner = () => {
  document.getElementsByClassName("loader")[0].style.display = "none";
};

const SubScript = async () => {
  const { route, searchUrl } = window.history.state;

  showSpinner();

  const data = await getParsedData(route, searchUrl);

  if (data) {
    hideSpinner();
  }

  renderTree(data);
  collapsibleTag();
};

const SubPage = { template: SubTemplate, script: SubScript };
export default SubPage;
