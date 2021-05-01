import React, { Component, useEffect, useState } from "react";
import Todos from "./Todos";
import AddForm from "./AddForm";
import { firebaseStore } from "../../config/fbConfig";
import "./todos.css";
import firebase from "firebase";

const TodoRoot = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    firebaseStore
      .collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);

  const deleteTodo = (id) => {
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  };

  const addTodos = (todo) => {
    firebaseStore.collection("todos").add({
      todo: todo,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  return (
    <div className="todo">
      <div className="todo-container">
        <div className="todo-title">
          <img src="./dasy.png" alt="cherry" />
          <h1>Say Something~</h1>
          <img src="./dasy.png" alt="cherry" />
        </div>
        <Todos todos={todos} deleteTodo={deleteTodo} />
        <AddForm addTodos={addTodos} />
      </div>
    </div>
  );
};

export default TodoRoot;
