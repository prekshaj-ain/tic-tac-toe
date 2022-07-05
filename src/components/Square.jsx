import React  from "react";
function Square({id,value,onClick}){
    return <button onClick={()=>{onClick(id)}}>{value}</button>
}
export default Square;