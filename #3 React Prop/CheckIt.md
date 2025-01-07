# 배운점

## 1. Prop에 대하여

- Prop은 부모 컴포넌트에서 자식 컴포넌트로 데이터를 보내는 방법
- 함수로 만들어진 컴포넌트에 전달하는 데이터 prop이라 한다.
- **리액트는 컴포넌트로 보내지는 데이터인 prop, 그 데이터의 상태인 state로 구분된다.**
- 데이터를 전달하는 방식은 객체이다. 컴포넌트로 데이터 객체를 보내 처리하게 한다.

```JavaScript
goToLogin = e => {
    e.preventDefault();
    // ***
  };

// 출처 https://velog.io/@moripark32/React-%EA%B8%B0%EC%B4%88-e38i48e2
// 실제 코드에서 prop 찾기 => e가 prop이다.
```

## 2. React Memo

- prop을 통해 자식 컴포넌트가 바뀌면 부모 컴포넌트도 재렌더링된다.
- 같은 부모를 가진 다른 컴포넌트들은 상태가 변하지 않아도 되는데 변경될 수 있다. 지정한 컴포넌트만 재렌더링하도록 표시하는게 React Memo(rize)이다.

```JavaScript
const MemorizedBtn = React.memo(Btn);
    function App() {
      const [value, setValue] = React.useState("Save Changes");
      const changeValue = () => setValue("Revert Changes");
      return (
        <div>
          <MemorizedBtn text={value} changeValue={changeValue} />
          <MemorizedBtn text="Confirm" />
        </div>
      );
    }

// 노드 트리를 재생성할 때 지정한 노드만 재생성하게끔 만드는 방법.
// Btn의 요소 중 변경된 요소만 재렌더링하게 하는 방법이다.
```

## 3. Prop Types

- 컴포넌트 내의 prop에 적절한 타입의 데이터를 전달했는지를 검사하는 prop type pkg가 있다. 검색해서 사용해 볼 것.

```JavaScript
Btn.propTypes = {
      text: PropTypes.string.isRequired,
};
```
