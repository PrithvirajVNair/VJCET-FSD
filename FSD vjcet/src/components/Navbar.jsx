import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar style={{background:'gray'}}>
            <Toolbar>
                <Typography  sx={{ flexGrow: 1 }}color={'gold'}>HARD STUCK CRUSADERS</Typography>
                <Button variant='contained'color='secondary'><Link to={'/'}style={{textDecoration:'none',color:'white'}}>Home</Link></Button>
                <Button variant='contained'color='secondary'><Link to={'First'}style={{textDecoration:'none',color:'white'}}>First</Link></Button>
                <Button variant='contained'color='secondary'><Link to={'Table'}style={{textDecoration:'none',color:'white'}}>Table</Link></Button>
                <Button variant='contained'color='secondary'><Link to={'Axios'}style={{textDecoration:'none',color:'white'}}>Axios</Link></Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar