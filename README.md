# Dom-X-Ray


## 목차
- [프로젝트 소개](#프로젝트-소개)
- [고민하였던 부분](#고민하였던-부분)
  1. 어떤 기술을 사용할까? **Vanilla Javascript** vs React
  2. 어떻게 크롤링할까? Axios vs **Puppeteer**
  3. 어디서 Parsing할까? Client vs **Server** 에서 Parsing
  4. SSR vs CSR
- [어려움을 겪었던 부분](#어려움을-겪었던-부분)
  1. Puppeteer를 이용한 parsing
  2. Vanilla Javascript 페이지 전환
  3. webpack 설정
- [개선할 부분](#개선할-부분)
  - puppeteer 크롤링 시간 단축
  - chrome extension으로 프로젝트 발전시키기
- [프로젝트 회고](#프로젝트-회고)

<br>

## 프로젝트 소개

#### 프로젝트 기간: 3주 (2022. 11.07 ~ 11. 27)
  - 1주차: 프로젝트 기획
    - 기술 검증, 아이디어 기획, Mockup 제작, 칸반 스케줄링
  - 2주차: 기능 개발
  - 3주차: 기능 개발 마무리 및 배포

<br>

<details>
  <summary>기술 스택</summary>
    <li>vanilla javascript</li>
    <li>d3</li>
    <li>puppeteer</li>
    <li>webpack</li>
    <li>scss</li>
</details>

<br>

## 고민하였던 부분

### 어떤 기술을 사용할까?
#### **Vanilla Javascript** vs React.js
처음엔 익숙하게 사용했던 React로 개발을 진행하려고 했습니다. 하지만 Mockup를 만들면서 관리해야 할 component와 state가 거의 없다고 느꼈습니다. 아주 간단한 구조의 웹서비스이다보니, 이번 기회가 Vanilla Javascript만을 이용해 프로젝트를 할 수 있는 좋은 기회라고 생각해 "**Vanilla Javascript**"를 선택하게 됐습니다.

### 어떻게 크롤링할까?
#### Axios vs **Puppeteer**
다른 웹사이트의 Dom Tree를 시각화하기 위해선 해당 웹사이트를 크롤링해야 했습니다.

1. Axios를 이용한 GET(simple request)요청을 하는 방법
2. Puppeteer로 크롤링해서 다른 웹사이트의 html파일을 가져오는 방법

위 두가지 방법이 모두 가능하지만, Puppeteer의 경우, SPA로 된 페이지도 크롤링할 수 있기 때문에, 어떤 웹사이트를 크롤링할 지 모르는 프로젝트의 특성상, 더 넓은 범위를 커버할 수 있는 Puppeteer를 쓰는 게 더 낫다고 판단했습니다.

### 어디서 Parsing할까?
#### Client vs **Server** 에서 **Parsing**
1. Client에서 하는 경우, 서버에서 받은 html 파일(innerHtml)을 Dom parser를 이용해, Dom 객체를 얻은 후, Parsing하는 방법
2. Server에서 하는 경우, 크롤링한 html 파일 Puppeteer 내 API를 이용해 데이터를 Parsing하는 방법

두 가지 방법 중, Puppeteer에서 원하는 데이터를 추출하는 것이 익숙치 않아, Client에서 하는 방법이 저에겐 더 구현하기 쉬웠습니다. 하지만, 어떤 사이트를 Parsing해야 할 지 모르기 때문에 꽤 무거운 작업이 될 수 있고, Puppeteer로 크롤링한 html파일 전부를 Client로 응답하는 것보다 서버에서 데이터를 Parsing한 후, 원하는 데이터만 골라 바로 사용할 수 있는 형태로 응답을 보내는 것이 더 낫다고 생각했습니다.(어떤 게 더 나은지 설명 추가)

### 어떻게 보여줄까?
#### SSR vs **CSR**

