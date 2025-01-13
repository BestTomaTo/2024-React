# 리액트 활용

- 리액트로 기능을 만들어 보면서 활용된 지식을 정리한다.

## 1. ToDos

### <form> 태그

- <input> 태그와 함께 사용되어 입력값을 제출하는 태그
- vanilla JS에서 event.preventDefault()를 통해 <form>태그의 기본 동작인 새로고침을 방지한다.

### state, state modifier, JS array를 활용한 toDos 추가

이미 만들어져 있는 배열에 원소를 추가할 때는 많은 방법에는 수많은 방법이 있다. vector와 같은 자료구조의 경우 push를 통해 원소를 추가하기도 한다.
JS에서는 '...(배열이름)'을 통해 해당 배열의 값들을 반환할 수 있는 코드 문법이 존재한다.

```JavaScript
const food = [1, 2, 3, 4]
[5, ...food] // [6, 1, 2, 3, 4]

// 사용되는 모습
const [toDos, setToDos] = useState([]);
setToDos((currentArray) => [toDo, ...currentArray]);
```

### JS map함수를 활용하여 배열 원소 각각을 컴포넌트로 만들기

- JSX의 가장 큰 장점은 html과 JS를 한번에 사용할 수 있다는 점이다.
- map함수는 JS에서 배열의 각 원소를 가져와 활용할 수 있는 함수이다.
- 이 함수를 이용하여 배열의 각 원소를 리액트 컴포넌트로 활용할 수 있다.

```JavaScript
<ul>
    {toDos.map((item, index) => (
        <li key={index}>{item}</li>
    ))}
</ul>
```

```JavaScript
// Delete 기능 추가
// 클릭을 하면 onClick에 의해 deleteToDo 함수 실행
<span onClick={() => deleteToDo(index)}>❌</span>

// deleteToDo는 filter 함수를 이용해서 인덱스를 비교하고 함수의 안의 내용이 거짓이면 그 원소를 제외한 나머지를 반환한다.
const deleteToDo = (index) => {
    setToDos(toDos.filter((item, todoIndex) => index !== todoIndex));
  };
```

## 2. Coin Trackers

###
