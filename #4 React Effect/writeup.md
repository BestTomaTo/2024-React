# 왜 Effect를 사용하는가?

컴포넌트와 state를 이용해서 화면의 구성요소를 제작할 때 한번 state가 변경되면
해당 컴포넌트의 모든 코드는 재렌더링된다. 이것은 react의 기본 동작 방식이지만
state의 특정 순서에 따라 코드의 변화를 주고 싶을 경우 위의 동작 방식은 해당 기능을
제공하지 못한다.

예를 들어 state가 변경될 때 API를 호출한다고 하자. 사용자는 처음 호출한 API를
바탕으로 서비스를 이용한다고 한다면, 매 state가 바뀔 때마다 컴포넌트가 재실행되어
API를 매번 다시 호출하게 된다. 이렇게 되면 우리가 원하는 서비스를 제공할 수 없다.

이를 위해 react에서는 effect라고 하는 또다른 기능을 제공한다.

## Effect 함수의 두 번째 인자

```JavaScript
function App() {
  const [keyword, setKeyword] = useState("");
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");
  useEffect(() => {
    console.log("call the API");
  }, []);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search Here..."
      />
    </div>
  );
}

// input에 글자를 입력하기만 해도 onChange 함수때문에 setKeyword 함수가 동작해 state가 변한다.
// state가 변하기 때문에 App을 전부 재렌더링해야 한다. 매우 비효율적이라 할 수 있다.
// effect함수 역할은 state 별로 자세한 코드를 짤 수 있게 도와준다.
```

```JavaScript
   useEffect(() => {
    console.log("call the API");
  }, []);
  useEffect(() => {
    console.log("i run when 'keyword' changes.");
  }, [keyword]);
  useEffect(() => {
    console.log("i run when 'counter' changes.");
  }, [counter]);

// effect는 state가 각각의 변경만을 확인하고 코드로 동작할 수 있도록 도와주는 함수이다. 이를 이용해서 세분화된 UI와 코드 작성이 가능하다.
// state를 바꾸면 컴포넌트가 재실행되는게 리액트의 동작이다. effect는 흘러가는 리액트 코드 흐름의 갈림길? 혹은 흐름을 제어하는 댐, 방어막이 될 수 있다.
```

## Cleanup Function

- 컴포넌트가 소멸할 때 동작하는 함수로 컴포넌트를 다룰 때 사용할 수 있다.
- 특별한 코드 포맷이 있는 건 아니고, 함수 형태로 컴포넌트를 생성하기 때문에 여기에 리턴값으로 cleanup function을 넣어주면 된다.
- 활용하는 방법 : 사용자가 어떤 창을 닫는 지에 관한 정보를 전송하기, 종료 시 API 호출 등.

```JavaScript
  function App() {
    function Hello() {
      function byFn() {
        console.log("send API");
      }
      function hiFn() {
        console.log("created!");
      }
      useEffect(hiFn, []);
      return <h1>Hello!</h1>
    }

    const [showing, setShowing] = useState(false);
    const setShowing () => {(prev) = !(prev)}
    return (
      <div>
        {clicking ? hiFn() : null}
        <button>{showing ? "show" : "hide"}</button>
      </div>
    );
  }
```
