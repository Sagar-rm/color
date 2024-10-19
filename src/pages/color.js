import React,{useState} from "react";

const Color = () =>{
    const [color , setColor] = useState('pink')

    function Change (){
        setColor(color == 'pink' ? 'red' : 'blue')
    }
    return(
        <div style={{backgroundColor:color , height:'100vh'}}>
        <button onClick={Change}>Change</button>
        </div>
    )
}


export default Color;