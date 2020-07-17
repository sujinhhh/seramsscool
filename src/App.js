import React from "react";
import Nevbar from "./components/Navbar";
import BookList from "./components/BookList";
import ThemeContextProvider from "./contexts/ThemeContexts";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Nevbar />
        <BookList />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
