import React from "react";

function Header() {
  return (
    <div
      style={{
        display: "flex",
        marginRight: "0 auto",
        backgroundColor: "lightcoral",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1200px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
            alt=""
            width="40px"
          />
          <h3>React</h3>
        </div>
        <ul
          style={{
            width: "30vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

function Section2() {
  return (
    <section>
      <div>
        <h3> React 를 배웁시다</h3>
        <ol>
          <li>wathch tutorial</li>
          <li>apply in my project</li>
          <li>apply job</li>
        </ol>
      </div>
      <div className="btn"> Let's Go~</div>
    </section>
  );
}

const Test = () => {
  return (
    <div>
      <Header />
      <Section2 />
    </div>
  );
};

export default Test;
