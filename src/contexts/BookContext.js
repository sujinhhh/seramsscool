import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "Daily Scriptue", id: 1 },
    { title: "What does the Bible teach us?", id: 2 },
    { title: "Good News", id: 3 },
    { title: "Life and Minstry WorkBook", id: 4 },
  ]);
  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
