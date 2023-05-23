import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const HW = () => {
    var [pname,setPname]=useState(""); //useState belongs to react
    const ChangeHome =()=>
    {
        setPname("HOME");
    }
    const ChangeGalary =()=>
    {
        setPname("Galary");
    }
    const ChangeContacts =()=>
    {
        setPname("Contacts");
    }
  return (
    <div>
         <Typography variant='h4'color={'blue'}>Welcome to {pname}</Typography>
        <Button variant='contained'onClick={ChangeHome}color='success'>Home</Button>
        <Button variant='contained'onClick={ChangeGalary}color='warning'>Galary</Button>
        <Button variant='contained'onClick={ChangeContacts}color='error'>Contacts</Button>
    </div>
  )
}

export default HW