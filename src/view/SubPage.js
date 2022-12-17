import { getParsedData } from "../model/api";
import renderTree from "../controller/tree/tree";
import { handleSearchButtonClick } from "../controller/render";

const SubTemplate = () => {
  return `
  <header>
    <div class="header-container">
      <svg width="50" height="60" viewBox="0 0 50 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M29.0278 60H21.0417V48.825H0L13.125 28.275H6.52778L25 0L43.4722 28.275H36.9444L50 48.825H29.0278V60ZM8.05556 44.325H21.1806H14.9306H35.0694H28.8889H42.0139H8.05556ZM8.05556 44.325H42.0139L28.8889 23.775H35.0694L25 8.325L14.9306 23.775H21.1806L8.05556 44.325Z" fill="#A7D81C"/>
      </svg>
      <h1 class="title">DOM X-ray</h1>
      <div class="search-form-box">
        <input type="url" id="subPage-input" name="searchUrl" value="" placeholder="Search Url" autocomplete="off" required />
        <button type="click" class="sub-search-button" route="/visualization"></button>
      </div>
    </div>
  </header>
  <div class="sub-main-container">
    <div class="loader-container">
      <div class="loader">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          width="60px" height="75px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">
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
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_60_56)">
          <path d="M27.0109 7.98914L7.98914 27.0109M12.7446 33.3515H22.2554C30.1812 33.3515 33.3515 30.1812 33.3515 22.2554V12.7446C33.3515 4.81885 30.1812 1.64856 22.2554 1.64856H12.7446C4.81885 1.64856 1.64856 4.81885 1.64856 12.7446V22.2554C1.64856 30.1812 4.81885 33.3515 12.7446 33.3515Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M27.0109 14.3297V7.98914H20.6703M7.98914 20.6703V27.0109H14.3297" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <defs>
          <clipPath id="clip0_60_56">
          <rect width="35" height="35" fill="white"/>
          </clipPath>
          </defs>
        </svg>
      </button>
      <button class="collapse-button">
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_60_59)">
          <path d="M11.1594 17.5H23.8406M12.7446 33.3515H22.2554C30.1812 33.3515 33.3515 30.1812 33.3515 22.2554V12.7446C33.3515 4.81885 30.1812 1.64856 22.2554 1.64856H12.7446C4.81885 1.64856 1.64856 4.81885 1.64856 12.7446V22.2554C1.64856 30.1812 4.81885 33.3515 12.7446 33.3515Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <defs>
          <clipPath id="clip0_60_59">
          <rect width="35" height="35" fill="white"/>
          </clipPath>
          </defs>
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
          <span class="tag-info-box" id="tagId"></span>
        </li>
        <li>
          <span class="tag-info-item">Contents</span>
          <span class="tag-info-box" id="textContent"></span>
        </li>
        <li>
          <span class="tag-info-item">Children</span>
          <span class="tag-info-box" id="childrenCount"></span>
        </li>
        <li style="display: list-item">
          <details id="classToggle">
            <summary>Class Name</summary>
              <li id="className"></li>
          </details>
        </li>
      </ul>
    </div>
  </div>`;
};

const SubScript = async () => {
  const showSpinner = () => {
    document.getElementsByClassName("loader")[0].style.display = "inline-block";
  };

  const hideSpinner = () => {
    document.getElementsByClassName("loader")[0].style.display = "none";
  };
  showSpinner();

  const { route, searchUrl } = window.history.state;
  const data = await getParsedData(route, searchUrl);

  hideSpinner();
  renderTree(data);
};

const SubPage = { template: SubTemplate, script: SubScript };
export default SubPage;
