import React from 'react'
import Page from '../../components/page'
import { Link, Outlet } from 'react-router-dom'
import { ExitToApp } from '@mui/icons-material'
import MenuIcon from '@mui/icons-material/Menu';
import {Avatar, Box, CssBaseline, Divider, 
  IconButton, Button, 
  Drawer, List, ListItem, ListItemButton, ListItemIcon, 
  ListItemText, styled, Toolbar, Typography, AppBar} from '@mui/material'
import { useLocation } from 'react-router-dom';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { makeStyles } from '@mui/styles'
import TableViewIcon from '@mui/icons-material/TableView';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useDispatch } from 'react-redux'
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import DashboardIcon from '@mui/icons-material/Dashboard';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
const useStyles = makeStyles((theme)=> ({
    selected : {
      background:'#1976D2'
    },
    icon: {
      marginLeft:'auto',
      [theme.breakpoints.up('md')]: {
        display:'none',
        
      }
    },
    drawer : {
      [theme.breakpoints.down('md')]: {
        display:'none'
      }
    },
    btn: {
      [theme.breakpoints.down('md')]: {
        display:'none'
      }
    }
  }))
  const drawerWidth = 240;
const ListData = [
    {id:1, title:'Dashboard', icon:<DashboardIcon />, to:'/admin/dashboard'  },
    {id:2, title:'Products', icon:<ProductionQuantityLimitsIcon />, to:'/admin/products'},
    {id:3, title:'Prices', icon:<AttachMoneyIcon />, to:'/admin/prices'},
    {id:4, title:'Cupons', icon:<StickyNote2Icon />, to:'/admin/cupons'},
  ]
  const StyledRoot = styled(AppBar)(({theme})=> ({
    position:'fixed',
    background: theme.palette.primary.main,
    [theme.breakpoints.up('md')]: {
      zIndex:theme.zIndex.drawer + 1,
    }
  }))
  const StyledToolbar = styled(Toolbar)(({theme})=> ({
    display:'flex',
    justifyContent:'space-between'
   }))
const AdminDashboard = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const [dOpen, setDopen] = React.useState(false)
    const location = useLocation();
    React.useEffect(() => {
      const matchingItem = ListData.find((item) => item.to === location.pathname);
      if (matchingItem) {
        setSelectedIndex(matchingItem.id);
      }
    }, [location.pathname]);
    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
      setDopen(false)
    };
    const classes = useStyles()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleLogOut = () => {
      setDopen(false)
        confirmAlert({
          title: 'Log Out',
          message: 'Are you sure to log out ?',
          buttons:[
            {
              label: 'Yes',
              onClick: ()=>{
                navigate('/',{ replace: true})
              }
            },
           {
            label: 'No',
           }
    
          ]
        })
        
    
      }
      const handleClose = (e) => {
        setDopen(!dOpen)
      }
  return (
    <Page
    title = "Admin Dashboard"
    >
        <Box sx={{display:'flex'}}>
        <CssBaseline /> 
        <StyledRoot >
    <StyledToolbar>
      <Box
      sx={{flex:1}}
      >
        <Typography> Admin Pannel </Typography>
      </Box>
      <Box>
        <Button sx={{color:'#fff', ml:2}} 
        className={classes.btn}
        endIcon={<ExitToApp />} onClick={handleLogOut}>
          Sign Out
        </Button>
        <IconButton
        className={classes.icon}
        onClick={() => setDopen(true)}
        >
          <MenuIcon sx={{color:'#fff'}} /> 
        </IconButton>
      </Box>
    </StyledToolbar>
</StyledRoot>
        <Drawer
        className={classes.drawer}
        variant='permanent'
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
        PaperProps={{
          sx: {
            background:'#fff'
          }
        }}
        >
          <Toolbar /> 
          <Box>
            <Box sx={{display:'flex', justifyContent:'center',}}>
              <Avatar src='/assets/images/admin.png' sx={{height:'120px', width:'120px', mt:'2rem'}} />
            </Box>
            <Typography sx={{textAlign:'center'}} variant='h6' gutterBottom> Admin </Typography>
            <Divider /> 
            <Box sx={{p:1}}>
              <Typography sx={{color:'#fff', fontSize:'15px', mt:1 }}> Admin Dashboard</Typography>
              <List component="nav">
                {ListData.map((val)=> {
                  return(
                    <>
                    <ListItem key={val} disablePadding
                    className={clsx(classes.root, {
                      [classes.selected]: selectedIndex === val.id,
                    })}
                    component={Link}
                    to={val.to}
                    >
                      <ListItemButton
                       selected={selectedIndex === val.id}
                       onClick={(event) => handleListItemClick(event, val.id)}
                       
                      >
                        <ListItemIcon sx={{color:'#000'}}>
                          {val.icon}
                        </ListItemIcon>
                      <ListItemText primary={val.title} sx={{color:'#000'}} />
                      </ListItemButton>
                    </ListItem>
                    </>
                  )
                })}
              </List>
            </Box>
          </Box>
        </Drawer>
        <Drawer
        open={dOpen}
        onClose={handleClose}
        variant='temporary'
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
        PaperProps={{
          sx: {
            background:'#822824'
          }
        }}
        >
          <Toolbar /> 
          <Box>
            <Box sx={{display:'flex', justifyContent:'center',}}>
              <Avatar src='/assets/images/admin.png' sx={{height:'120px', width:'120px', mt:'2rem'}} />
            </Box>
            <Typography sx={{color:'#fff', textAlign:'center'}} variant='h6' gutterBottom> Admin </Typography>
            <Divider /> 
            <Box sx={{p:1}}>
              <Typography sx={{color:'#fff', fontSize:'15px', mt:1 }}> Admin Dashboard</Typography>
              <List component="nav">
                {ListData.map((val)=> {
                  return(
                    <>
                    <ListItem key={val} disablePadding
                    className={clsx(classes.root, {
                      [classes.selected]: selectedIndex === val.id,
                    })}
                    component={Link}
                    to={val.to}
                    >
                      <ListItemButton
                       selected={selectedIndex === val.id}
                       onClick={(event) => handleListItemClick(event, val.id)}
                       
                      >
                        <ListItemIcon sx={{color:'#fff'}}>
                          {val.icon}
                        </ListItemIcon>
                      <ListItemText primary={val.title} sx={{color:'#fff'}} />
                      </ListItemButton>
                    </ListItem>
                    </>
                  )
                })}
              </List>
              <Divider
              sx={{background:'#fff'}}
              /> 
             
              <Button 
              variant='contained'
              color='secondary'
              sx={{color:'#fff', ml:'20%', mt:3}} 
        endIcon={<ExitToApp />} onClick={handleLogOut}>
          Sign Out
        </Button>
      
            </Box>
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3, }}>
        <Toolbar /> 
          <Outlet /> 
        </Box>
      </Box>
    </Page>
  )
}

export default AdminDashboard
