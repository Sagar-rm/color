import React,{useState} from "react";


function Aap(){
    const [count , setcount] = useState(0);

function decrement (){
    setcount(count-1)
}
function increment (){
    setcount(count +1)
}

    return(
        <>

        
        <button onClick={decrement}> - </button>
        <span> {count} </span>
        <button onClick={increment}> + </button>
        </>
    )
}


export default Aap;