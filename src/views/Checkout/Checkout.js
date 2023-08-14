import { Box, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles((theme)=> ({
    
}))

const Checkout = () => {
    const classes = useStyles()
  return (
    <div>
      <Box className={classes.box}>
        <Typography>
            Checkout
        </Typography>
      </Box>
    </div>
  )
}

export default Checkout
