import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState('')
  const [toDos, setToDos] = useState([])
  const onChange = (e) => {
    setToDo(e.target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault();
    // 아래의 if문 때문에 input 태그 안에 글이 없다면
    // 엔터를 누르거나 버튼을 클릭해도 onSubmit()함수를 종료한다.
    if(toDo === ''){
      return
    }
    // 일반적인 자바스크립트라면 toDos.push(e.target.value)를 썼을 것이다.
    // 리액트에서는 state를 작성할때 조건이 있다
    // state는 항상 새로운 값이어야 한다.
    // state에 직접 할당은 하면 안된다.
    // 아래처럼 함수를 사용하면 직접 할당을 하는 것이 아니다. 첫번째 argument로 현재 state가 할당된다.
    // input태그에 입력하려는 값이 첫번째 argument가 되는 것이 아니다.
    setToDos((currentTodo) => [toDo, ...currentTodo])
    setToDo('')
  }

  const handleDelete = (idx) => {
    setToDos((currentTodo) => {
      const newTodo = currentTodo.slice();
      newTodo.splice(idx, 1);
      return newTodo;
    })
  }
  // console.log(toDos)
  // 아래의 로그 결과는 react.element 타입이라고 나타난다.
  // 이것은 react에서 가상 돔을 만들어서 요소를 생성했다고 볼 수 있다.
  // console.log(toDos.map((toDo, idx, arr) => <li key={idx}>{toDo}</li>))
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={toDo} onChange={onChange} placeholder="Write your to do..."/>
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.length !== 0 ?
          toDos.map((toDo, idx, arr) => {
            return (
                <li key={idx}>
                  <span>{toDo}</span>
                  <button onClick={() => handleDelete(idx)}>X</button>
                </li>
            )
          }) :
          null
        }
      </ul>
    </div>
  );
}

export default App;
