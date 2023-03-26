import React, { useState } from "react";
import Square from "./Square";
const Home = () => {
  const [state, setstate] = useState(Array(9).fill(null));
  const [isxturn, setisxturn] = useState(true);
  const [show, setshow] = useState(false);
  console.log(state);
  const iswinner = () => {
    const winnerlogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let logic of winnerlogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return false;
  };

  const allwinner = iswinner();
  console.log("all winners", allwinner);
  const clickhandlera = (index) => {
    if (state[index] !== null) {
      return;
    }
    if (!state[index] !== null) {
      setshow(true);
    }
    const copystate = [...state];
    copystate[index] = isxturn ? "x" : "y";
    setstate(copystate);
    setisxturn(!isxturn);
  };
  const clickhand = () => {
    setstate(Array(9).fill(null));
    setshow(false);
  };
  return (
    <div className="text-center">
      <h1 className="mt-4">Tic Tac Toe Game</h1>
      {allwinner ? (
        <>
          <h2 className="mt-5">{allwinner} is won the Game</h2>
          <br></br>
          <button onClick={clickhand} className="button">
            Restart Game
          </button>
        </>
      ) : (
        <>
          <div className="d-flex justify-content-center mt-5">
            <Square onClick={() => clickhandlera(0)} statea={state[0]}></Square>
            <Square onClick={() => clickhandlera(1)} statea={state[1]}></Square>
            <Square onClick={() => clickhandlera(2)} statea={state[2]}></Square>
          </div>
          <div className="d-flex justify-content-center">
            <Square onClick={() => clickhandlera(3)} statea={state[3]}></Square>
            <Square onClick={() => clickhandlera(4)} statea={state[4]}></Square>
            <Square onClick={() => clickhandlera(5)} statea={state[5]}></Square>
          </div>

          <div className="d-flex justify-content-center">
            <Square onClick={() => clickhandlera(6)} statea={state[6]}></Square>
            <Square onClick={() => clickhandlera(7)} statea={state[7]}></Square>
            <Square onClick={() => clickhandlera(8)} statea={state[8]}></Square>
          </div>
          {show && (
            <button onClick={clickhand} className="mt-5 button">
              Restart Game
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
