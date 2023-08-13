import { AppBar, Toolbar  ,Typography, Box } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { Outlet } from 'react-router-dom/dist'
import Body from './Body'
import NavBarLinks from './NavBarLinks'
import Page from '../../components/page/page'
import Nav from '../../components/AppBar/Header'
import Footer from './components/Footer'
const useStyles = makeStyles((theme) => ({
    root:{
      height:'100vh'
        // padding: theme.spacing(3)
    }
}))
const Landing = () => {
    const classes = useStyles()
  return (
    <Page
    title="Welcome To Website"
    >
      <Nav />
        <Box className={classes.root}>
      Welcome To the Website 
        </Box>
        <Footer />
    </Page>
  )
}

export default Landing
