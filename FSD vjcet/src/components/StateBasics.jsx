import { Button,TextField ,Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var [pname,setPname]=useState("Prithviraj"); //useState belongs to react
    var [val,setVal]=useState();
    /*const ChangeName =()=>{
        console.log("Clicked");
        setPname("PALS");
    }*/
    const inputHandler =(event)=>{
      setVal(event.target.value);
  }
    const ChangeName = () =>{
      setPname(val)
      setVal("setVal")
  }
  return (
    <div>
        <Typography variant='h4'>{pname}</Typography>
        <TextField variant='outlined' label='Name' value={val}onChange={inputHandler}/><br/>
        <Button variant='contained'onClick={ChangeName}>Change</Button>
    </div>
  )
}

export default StateBasics


  