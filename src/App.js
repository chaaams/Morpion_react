import logo from './logo.svg';
import './App.css';
import Square from './components/Square';
import { useState, useEffect } from 'react';
const initialState = ["","","","","","","","",""];

function App() {
  const [gameState, setGameState] = useState(initialState);
  const [isXChance, setIsXChance] = useState(false);

  const onSquareClicked = (index) => {
    let strings = Array.from(gameState);
    strings[index] = isXChance ? "X" : "O";
    setGameState(strings);
    setIsXChance(!isXChance);
  }
useEffect(()=>{
 const winner = checkWinner();
 if(winner){
   alert(`${winner} à gagné`)
   setGameState(initialState)
 }
},[gameState])

const checkWinner = () => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
      return gameState[a];
    }
  }
  return null;
}

  return (
    <div className="app-header">
      <p className="heading-text">Morpion avec React</p>
      <div className=" row jc-center">
        <Square className="b-bottom-right" state={gameState[0]} onClick={()=> onSquareClicked(0)}/>
        <Square className="b-bottom-right" state={gameState[1]} onClick={()=> onSquareClicked(1)}/>
        <Square className="b-bottom" state={gameState[2]} onClick={()=> onSquareClicked(2)}/>
      </div>
      <div className=" row jc-center">
        <Square className="b-bottom-right" state={gameState[3]} onClick={()=> onSquareClicked(3)}/>
        <Square className="b-bottom-right" state={gameState[4]} onClick={()=> onSquareClicked(4)}/>
        <Square className="b-bottom" state={gameState[5]} onClick={()=> onSquareClicked(5)}/>
      </div>
      <div className=" row jc-center">
        <Square className="b-right" state={gameState[6]} onClick={()=> onSquareClicked(6)}/>
        <Square className="b-right" state={gameState[7]} onClick={()=> onSquareClicked(7)}/>
        <Square state={gameState[8]} onClick={()=> onSquareClicked(8)}/>
      </div>
      <button className='rejouer-button' onClick={()=> setGameState(initialState)}>Rejouer</button>
      <p className='fc-aqua fw-600'>Chamssoudine DIABY- 2022</p>
    </div>
  );
}

export default App;
