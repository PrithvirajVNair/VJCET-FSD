import React from 'react'
import { TextField, Button, Typography } from '@mui/material';
const First = () => {
  return (
    <div><h1>Prithviraj V Nair</h1>
    <input placeholder='Name'/>
      <br/>
      <input type='password' placeholder='Password'/>
      <br/>
      <button>Submit</button>
      <br/>

      <Typography variant='h1'>Aka PALS</Typography>
      <br/>
      <TextField variant='outlined' label='Outline-Text'/>
      <br/>
      <Button variant='contained'>Submit</Button>
      </div>
  )
}

export default First