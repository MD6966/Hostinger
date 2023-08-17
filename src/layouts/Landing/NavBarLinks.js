import { Badge, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom/dist'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const NavBarLinks = () => {
  return (
    <div>
      <Button variant='contained'
      component={Link}
      to='/home'
      > Home</Button>
       <Button variant='contained'
      component={Link}
      to='/auth/login'
      > Login</Button>
       <Button variant='contained'
      component={Link}
      to='auth/register'
      > SignUp</Button>
      <Button variant='contained'
      endIcon={
        <Badge badgeContent={5} color='secondary'>
          <ShoppingCartIcon /> 
        </Badge>
      }
      component={Link}
      to='cart'
      > View Cart </Button>
    </div>
  )
}

export default NavBarLinks
