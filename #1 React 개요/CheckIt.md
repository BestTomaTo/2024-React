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

**- 간단히 말하자면 컴포넌트는 JSX를 반환하는 함수임.**
<br />

- 리액트 엘리먼트는 고정된 UI 객체에 대한 명세, 가상 DOM 노드에 대한 표현이다.
- 리액트 컴포넌트는 가상 DOM 노드를 다양한 속성으로 감싸고 있는 설계 구조이며 함수 혹은 클래스로 선언할 수 있다. 실행되면 자바스크립트 코드를 포함하고 있는 리액트 엘리먼트를 반환한다.
- 리액트 엘리먼트에 자바스크립트 코드를 결합한게 리액트 컴포넌트라 보면 될 듯하다.
- 컴포넌트를 사용하는 가장 큰 이유는 단순함과 코드의 재사용 때문이다. 리액트는 엘리먼트를 DOM에 매핑하거나 컴포넌트 트리로 변환하여 렌더링하는데 엘리먼트 자체는 정적이기 때문에 수정하거나 로직을 포함할 수 없다. 반면 컴포넌트는 함수나 클래스의 형태로 작성되어 재사용이 가능한 설계 단위로 작동한다.
