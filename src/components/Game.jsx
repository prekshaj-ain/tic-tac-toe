import React,{useState} from "react";
import Board from "./Board";
import { calculateWinner } from "../helper";
function Game(){
    const [turn,setTurn] = useState("X");
    const [cells,setCells] = useState(Array(9).fill(null))
    let winner = calculateWinner(cells);
    function handleClick(val){
        const squares = [...cells];
        if(squares[val] !== null){
            alert("already clicked");
            return;
        }
        if(turn === "X"){
            setTurn("O");
        }else{
            setTurn("X");
        }
        squares[val] = turn;
        setCells(squares);
        
    }
    
    function restartGame(){
        setCells(Array(9).fill(null));
        winner = calculateWinner(cells);
    }
    return <div>
        <h3>Turn : {turn}</h3>
        <Board onClick={handleClick} squares={cells}/>
        {winner ?
        <div>
        <h3>Winner: {winner}</h3>
        <button className="play-again" onClick={restartGame}>play again</button>
        </div> :
        cells.every(cell => cell !== null) &&
        <button className="play-again" onClick={restartGame}>play again</button>

        }
    </div>
}
export default Game;