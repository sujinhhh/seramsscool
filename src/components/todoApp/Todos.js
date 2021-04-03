import React from "react";
import { firebaseStore } from "../../config/fbConfig";
import "./todos.css";

const Todos = ({ todos }) => {
  return (
    <div>
      {todos.map((item) => (
        <div key={item.id} className="contents-container">
          <div className="contents-title">
            <span> {item.todo.content}</span>
          </div>
          <button
            className="todo-btn"
            onClick={() =>
              firebaseStore.collection("todos").doc(item.id).delete()
            }
          >
            삭제
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todos;

// export default function Todos({ todos, deleteTodo }) {
//   const todoList = todos.length ? (
//     todos.map((item) => {
//       return (
//         <div className="collection-item" key={item.id}>
//           <span onClick={() => deleteTodo(item.id)}>{item.content}</span>
//         </div>
//       );
//     })
//   ) : (
//     <p> 할말 없음 </p>
//   );
//   return <div className="todos collection">{todoList}</div>;
// }
