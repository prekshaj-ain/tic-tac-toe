import React from "react"
import Square from "./Square";
function Board({onClick,squares}){
    return (
        <div className="board-grid">
            {squares.map((square,i)=>{
            return <Square key={i} id={i} onClick={onClick} value={square}/>
            })}
            
        </div>
    )
}
export default Board;