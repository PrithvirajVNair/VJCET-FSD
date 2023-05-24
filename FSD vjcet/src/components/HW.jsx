import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const HW = () => {
    var [pname,setPname]=useState(""); //useState belongs to react
    const ChangeHome =()=>
    {
        setPname("Welcome to Home");
    }
    const ChangeGalary =()=>
    {
        setPname("Welcome to Galary");
    }
    const ChangeContacts =()=>
    {
        setPname("Welcome to Contacts");
    }
    const ChangeNuke = () => {
        setPname("Never Gonna Give You Up!");
        return (
          <img src="https://i.insider.com/602ee9d81a89f20019a377c6?width=1136&format=jpeg" alt="" />
        );
      };
      
  return (
    <div>
        <Typography variant='h4'color={'blue'}>{pname}</Typography>
        <hr/>
        <Button variant='contained'onClick={ChangeHome}color='success'>Home</Button>
        <Button variant='contained'onClick={ChangeGalary}color='primary'>Galary</Button>
        <Button variant='contained'onClick={ChangeContacts}color='error'>Contacts</Button>
        <Button variant='contained'onClick={ChangeNuke}color='secondary'>Nuke</Button>
    </div>
  )
}

export default HW