# <배운점>

## 1. React와 ReactDom

- React는 사용자 인터페이스를 구축하기 위한 JavaScript 라이브러리이다.
- "컴포넌트"라고 불리는 작고 고립된 코드 파편들을 이용하여 복잡한 UI를 구성하도록 돕는다.
- React는 html element의 생성, property 추가, event 설정 한번에 가능
- Interactive한 app을 제작하기 위해 element 생성 시 element 생성시 event를 달 수 있게함.

```javascript
const btn = React.createElement(
  "button",
  {
    onClick: () => console.log("im clicked!"), // <= 중간 코드를 prop object라 부른다.
    style: {
      backgroundColor: "tomato", // <= prop object 안에 event와 css도 설정가능하며, 자동으로 html, js, css의 위치로 가게 된다.
    },
  },
  "Click me!"
);
```

- React JS 는 interactivity의 원동력이다.
- ReactDOM은 생성한 element를 html로 불러오는 역할이다.

## 2. JSX와 Babel

- React에서 제공하는 자바스크립트의 확장판이 JSX이다.
- JSX를 원래 자바스크립트 코드로 변환해주는 컴파일러가 Babel이다.
- 간이 컴파일러를 넣어 코드를 더 효율적으로 작성하게 도와주는 도구들이다.

## 3. 리액트 엘리먼트와 리액트 컴포넌트

- 리액트 엘리먼트는 고정된 UI 객체에 대한 명세
- 리액트 컴포넌트는 엘리먼트의 대한 선언과 관리를 동시에 하는 자바스크립트 코드이다.
- 리액트 엘리먼트에 자바스크립트 코드를 결합한게 리액트 컴포넌트라 보면 될 하다.
