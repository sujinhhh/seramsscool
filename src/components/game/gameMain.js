import React, { useEffect, useState } from "react";
import "./game.css";

export default function GameMain() {
  const [openedCard, setOpenedCard] = useState([]);
  const [matched, setMatched] = useState([]);

  const pokemons = [
    { id: 1, name: "Fun English Game", url: "/game/01.gif" },
    { id: 2, name: "Only Speak English", url: "/game/02.gif" },
    { id: 3, name: "Exams for School", url: "/game/03.gif" },
    { id: 4, name: "Movie English", url: "/game/04.gif" },
  ];
  const welcome = { id: 4, name: "Are you Ready?!", url: "/game/me.png" };

  //currently there are 4 pokemons but we need the pair

  const pairOfPokemons = [...pokemons, ...pokemons, welcome];

  function flipCard(index) {
    setOpenedCard((opened) => [...opened, index]);
  }

  useEffect(() => {
    if (openedCard < 2) return;

    const firstMatched = pairOfPokemons[openedCard[0]];
    const secondMatched = pairOfPokemons[openedCard[1]];

    if (secondMatched && firstMatched.id === secondMatched.id) {
      setMatched([...matched, firstMatched.id]);
    }

    if (openedCard.length === 2) setTimeout(() => setOpenedCard([]), 1000);
  }, [openedCard]);

  return (
    <div className="game">
      <div className="game-title">
        <h1>Check out our Cool features</h1>
      </div>
      <div className="cards">
        {pairOfPokemons.map((pokemon, index) => {
          //lets flip the card

          let isFlipped = false;

          if (openedCard.includes(index)) isFlipped = true;
          if (matched.includes(pokemon.id)) isFlipped = true;
          return (
            <div
              className={`pokemon-card ${isFlipped ? "flipped" : ""} `}
              key={index}
              onClick={() => flipCard(index)}
            >
              <div className="inner">
                <div className="front">
                  <img src={pokemon.url} alt="pokemon-name" width="100" />
                  <h2>{pokemon.name}</h2>
                </div>
                <img className="back" src="/game/lightbulb.gif" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
