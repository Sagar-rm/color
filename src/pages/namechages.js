import React,{useState} from "react";


function Name(){
    const[data,setData] = useState("vaibhav");
    function Update(){
        if (data == 'vaibhav')
            setData("Omkar")
        else 
            setData('vaibhav')
    }

    return(
        <>
        <h1>{data}</h1>
        <button onClick={Update}>Update</button>    
        </>
    )
}

export default Name;