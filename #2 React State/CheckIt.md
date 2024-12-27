# <배운점>

## 1. 리액트를 사용하는 이유

- 리액트가 강력한 이유는 바뀐 컴포넌트만 수정하기 때문이다.

### 추가

Vanilla JavaScript와 ReactJS는 노드 변경 처리 과정이 좀 많이 다릅니다.

1. Vanilla JavaScript
   Vanilla JavaScript에서는 DOM 변경을 직접 처리합니다. 즉, 필요한 DOM 요소를 직접 선택하고, 요소의 속성을 변경하거나 새로운 요소를 추가하거나 기존 요소를 제거하는 등의 작업을 직접 수행합니다.
   DOM 변경이 발생하면, 브라우저는 변경된 DOM 트리를 다시 계산하고, 렌더 트리를 다시 생성한 후 화면에 그립니다. 이 과정은 비용이 많이 드는 연산으로, 자주 발생하게 되면 성능을 저하시킬 수 있습니다.

2. ReactJS
   ReactJS는 DOM 변경을 처리하기 위해 가상 DOM(Virtual DOM)이라는 개념을 도입합니다. ReactJS에서는 먼저 메모리에 가상 DOM 트리를 생성합니다. 이 트리는 실제 DOM 트리의 사본으로서, 실제 DOM 트리와 별도로 존재합니다.
   ReactJS는 상태 변경이 발생할 때마다 새로운 가상 DOM 트리를 생성하고, 이전의 가상 DOM 트리와 비교하여 변경된 부분을 파악합니다. 이렇게 파악된 변경 사항만 실제 DOM에 반영하는 방식을 사용합니다. 이 과정을 '재조정(Reconciliation)' 또는 'Diffing'이라고 부릅니다.
   가상 DOM을 사용함으로써, 변경이 필요한 최소한의 요소만 실제 DOM에 반영되기 때문에 불필요한 연산을 줄이고 성능을 향상시킬 수 있습니다.

따라서, ReactJS는 복잡한 UI 업데이트를 효과적으로 처리할 수 있으며, 이를 통해 웹의 응답성을 향상시키고 사용자 경험을 개선할 수 있습니다!

## 2. 기술

### 2-0. JSX

- 리액트에서는 자바스크립트에서 html과 css를 모두 다룰 수 있는 자바스크립트와 비슷한 JSX 언어를 지원한다.

```JavaScript
function App() {
      const [minutes, setMinutes] = React.useState();
      const onChange = () => {
        console.log("somebody wrote");
      };
      return (
        <div>
          <h1>Super Converter</h1>
          <label>Minutes</label>
          <input
            value={minutes}
            id="minutes"
            placeholder="Minutes"
            type="number"
            onChange={onChange}
          />
          <label>Hours</label>
          <input id="Hours" placeholder="Hours" type="number" />
        </div>
      );
}
```

- JSX의 특징은 컴포넌트를 사용하는 것이다. HTML 객체에 자바스크립트 코드를 입힌거라 보면 된다.
- 자바스크립트의 특징인 addEventListener역할의 메소드를 html 태그 내에 추가할 수 있다.

### 2-1. vanilla 방식으로 리랜더링 하는 방법법

- Element 내에 변수 추가하는 방법 {counter}

```JavaScript
   function countUP() {
      counter = counter + 1;
      ReactDOM.render(<Container />, root);
   }
   // 이런 식으로 필요한 부분만 렌더링한다.
   // 트리를 전부 재구성할 필요가 없는 것이다.
   // 밑에는 이 과정을 간단히 한 state라는 개념에 대해 공부한다.

```

### 2-2. 리액트의 setState()를 활용하는 방법

- 리액트의 장점인 필요한 부분을 재랜더링하는 방법
- 재랜더링을 위해선 변경된 데이터에 대한 정보가 필요한데 리액트는 데이터가 저장할 state를 제공한다.

```JavaScript
   const [counter, modifier] = React.useState(0);
   // React.useState 첫 번째 매개변수는 데이터를 저장할 상태, 두 번째는 데이터를 변경하는 변경자 함수를 넣는다.
   // 값이 변경된 노드만 찾아서 리액트는 프론트 트리를 다시 재구성한다.
   // modifier 함수를 가지고 state를 변경하면 컴포넌트의 변경된 부분만 새로운 값을 가지고 재랜더링된다.
   const onClick = () => {
      setCounter((current) => current + 1); // 변수를 숨겨 수정을 막는 안전한 방법
      setCounter(counter + 1);
   }
   // 저 setcouter라는 함수는 값을 받고 state를 수정하여 재렌더링하는 프로세스가 모두 포함된는 함수이다.
```

## 3. Inputs and State

- state를 이용했을 때의 장점은 컴포넌트의 변경 사항을 추적할 수 있다는 것이다. 이를 통해 필요한 부분만 재랜더링 등이 가능하다.
- 밑의 코드는 input을 감지했을 때 react가 생성하는 event를 감지해 화면에 출력하는 내용이다. Modifier를 수정하면 어떤거든 가능하다.

```JavaScript
// code1

function App() {
      const [minutes, setMinutes] = React.useState();
      const onChange = () => {
        setMinutes(event.target.value);
      };
      return (
        <div>
          <h1>Super Converter</h1>
          <label>Minutes</label>
          <input
            value={minutes}
            id="minutes"
            placeholder="Minutes"
            type="number"
            onChange={onChange}
          />
          <h4> You want to change {minutes}</h4>
          <label>Hours</label>
          <input id="Hours" placeholder="Hours" type="number" />
        </div>
      );
    }

// code 2

function App() {
      const [minutes, setMinutes] = React.useState();
      const onChange = () => {
        setMinutes(event.target.value);
      };
      const reset = () => {
         setMinutes(0);
      }
      return (
        <div>
          <h1>Super Converter</h1>
          <div>
            <label htmlFor="hours">Minutes</label>
            <input
              value={minutes}
              id="minutes"
              placeholder="Minutes"
              type="number"
              onChange={onChange}
            />
          </div>
          <div>
            <label htmlFor="Hours">Hours</label>
            <input
              value={minutes / 60}
              id="Hours"
              placeholder="Hours"
              type="number"
            />
          </div>
          <button onClick={reset}>Reset!</button>
        </div>
      );
    }

// 위 코드는 minutes라는 state를 이용해서 minutes의 변화가 감지되면 그 값을 바탕으로 해당 컴포넌트를 재렌더링하는 코드이다.
// Minutes를 작성하면 Hours의 input에도 minutes state의 값이 재렌더링을 통해 작성된다.
// html상에서는 변경된 값만 재렌더링된다. (button 컴포넌트도 마찬가지!)

// code 3
const [flipped, setFlipped] = React.useState(false);
const onFlip = () => setFlipped((current) => !current); // 현재 상태를 가지고 state를 변경하는 방법이다.

// code 4
function App() {
      const [amount, setAmount] = React.useState();
      const [flipped, setFlipped] = React.useState(false);
      const onChange = () => {
        setAmount(event.target.value);
      };
      const reset = () => setMinutes(0);
      const onFlip = () => {
        reset();
        setFlipped((current) => !current);
      };
      return (
        <div>
          <h1>Super Converter</h1>
          <div>
            <label htmlFor="hours">Minutes</label>
            <input
              value={flipped ? amount * 60 : amount}
              id="minutes"
              placeholder="Minutes"
              type="number"
              onChange={onChange}
              disabled={flipped === true}
            />
          </div>
          <div>
            <label htmlFor="Hours">Hours</label>
            <input
              value={flipped ? amount : Math.round(amount / 60)}
              id="Hours"
              placeholder="Hours"
              type="number"
              disabled={flipped === false}
            />
          </div>
          <button onClick={reset}>Reset!</button>
          <button onClick={onFlip}>flip!</button>
        </div>
      );
    }
// code 3를 적용한 모습
// 삼항 연산자를 사용해서 조건문을 적용
// reset시에도 state를 수정할 수 있게 변경.

// code 5 총정리
function App() {
      const [amount, setAmount] = React.useState();
      const [flipped, setFlipped] = React.useState(false); // state 2개
      const onChange = () => {
        setAmount(event.target.value); // input 태그에 입력한 값으로 재랜더링
      };
      const reset = () => setAmount(0); // reset함수, amount 값을 0으로 초기화하는 setAmount함수 실행
      const onFlip = () => { // flip 전용 함수
        reset();
        setFlipped((current) => !current); // 현재 값을 바탕으로 flip값을 변경
      };
      return (
        <div>
          <h1>Super Converter</h1>
          <div>
            <label htmlFor="hours">Minutes</label>
            <input
              value={flipped ? amount * 60 : amount} // flip 값을 바탕으로 출력값을 지정
              id="minutes"
              placeholder="Minutes"
              type="number"
              onChange={onChange} // Change 이벤트가 발생하면 onChange 함수 실행
              disabled={flipped === true} // flip 여부에 따라 input 태그의 값 변경
            />
          </div>
          <div>
            <label htmlFor="Hours">Hours</label>
            <input
              value={flipped ? amount : Math.round(amount / 60)}
              id="Hours"
              placeholder="Hours"
              type="number"
              onChange={onChange}
              disabled={flipped === false}
            />
          </div>
          <button onClick={reset}>Reset!</button>
          <button onClick={onFlip}>flip!</button>
        </div>
      );
    }
```

## 4. HTML & JSX

- 둘은 엄연하게 다른 언어
