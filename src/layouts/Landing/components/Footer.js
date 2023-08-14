import { Box, Button, styled } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const StyledFooter = styled(Box)(({theme})=> ({
    height:'25vh',
    background: theme.palette.primary.main,
    padding: theme.spacing(3)
}))

const Footer = () => {
  return (
    <div>
      <StyledFooter>
        <Box>
            <Button variant='contained'
            component={Link}
            to='/admin-login'
            >
                Admin
            </Button>
            <Button variant='contained'
            component={Link}
            to='/checkout'
            >
              Checkout 
            </Button>
        </Box>
      </StyledFooter>
    </div>
  )
}

export default Footer
