import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const fetchRandomData = () => {
  return axios
    .get("https://randomuser.me/api")
    .then(({ data }) => {
      // console.log(data);
      // return data;
      return JSON.stringify(data, null, 2);
    })
    .catch((err) => console.log(err));
};

export default function Practice() {
  const [increment, setIncrement] = useState(0);
  const [list, setlist] = useState("");

  useEffect(() => {
    fetchRandomData().then((data) => {
      setlist(data || "no user found");
    });
  }, []);

  // useEffect(() => {
  //   const fetchingData = async () => {
  //     const response = await fetch("https://randomuser.me/api");
  //     const result = await response.json();
  //     const data = result.results[0];

  //     setlist(data);
  //     console.log(data);
  //   };
  //   fetchingData();
  // }, []);

  return (
    <>
      <div>
        <h1>{increment}</h1>
        <button
          onClick={() => {
            setIncrement(increment + 1);
          }}
        >
          click
        </button>
      </div>
      <div>{list}</div>
    </>
  );
}
