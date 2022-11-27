# Dom-X-Ray

<p align='center'>
<img src="https://user-images.githubusercontent.com/99335782/203970220-0beef7d5-18ed-4ea6-9a63-29752bdacdf9.png" width="600">
</p>

# 목차
- [프로젝트 소개](#프로젝트-소개)
- [고민하였던 부분](#고민하였던-부분)
  1. Vanilla Javascript vs React
  2. Axios vs Puppeteer
  3. Client에서 or Server에서 Parsing
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

<details>
  <summary>프로젝트 기간</summary>
    <li>1주차</li>
    <li>2주차</li>
    <li>3주차</li>
</details>

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
Axios를 이용한 GET(simple request)요청을 하는 방법과 Puppeteer로 크롤링해서 다른 웹사이트의 html파일을 가져오는 방법 중 고민했습니다. Puppeteer의 경우, SPA로 된 페이지도 크롤링할 수 있기 때문에, 어떤 웹사이트를 크롤링할 지 모르는 프로젝트의 특성상, 더 넓은 범위를 커버할 수 있는 Puppeteer를 쓰는 게 더 낫다고 판단했습니다.

### 어디서 Parsing할까?
#### Client vs **Server** 에서 Parsing

### 어떻게 보여줄까?
#### SSR vs CSR

