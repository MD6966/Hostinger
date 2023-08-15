import { Box, Button, Card, CardContent, CardHeader, Chip, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import DoneIcon from '@mui/icons-material/Done';
const LandingContent = () => {
  const features = [
    {first:'Standard', sec: 'Performance', color:'yellow'},
    {first:'100', sec: 'Websites', color:'yellow'},
    {first:'100 GB', sec: 'SSD storage', color:'yellow'},
    {first:'Weekly', sec: 'Backups', color:'yellow'},
    {first:'Unlimited', sec: 'Free SSL', color:'yellow'},

  ]
  return (
    <div>
      <Typography
      variant='h3'
      textAlign="center"
      fontWeight="bold"
      sx={{mt:2}}
      >
        Choose Your Web Hosting Plan 
      </Typography>
      <Box sx={{p:5}}>
        <Grid
        container
        spacing={3}
        >
          <Grid item
          lg={4}
          md={4}
          sm={12}
          >
           <Card
           elevation={3}
           sx={{p:3, border: '1px solid rgba(0,0,0,0.25)'}}
           >
            <CardHeader title={<Typography variant="h4" sx={{textAlign:'center', fontWeight:'bold'}}>Premium</Typography>} /> 
            <Typography  sx={{textAlign:'center',}}>Everything you need to create your website</Typography>
           <Box sx={{display:'flex',mt:2, justifyContent:'center', alignItems:'center'}}>
           <Typography sx={{textDecoration:'line-through', color:'#898989'}} > $11.99</Typography>
           <Chip label="Save 75%" sx={{ml:1}}/> 
           </Box>
           <Box sx={{mt:2}}>
           <Typography variant="body1" textAlign="center">
           <sub style={{fontSize:'1.5rem'}}>$</sub>
      <Typography variant="body1" sx={{ fontSize: '3rem', display: 'inline', fontWeight:'bold' }}>
        2.99
      </Typography>
      <sub style={{fontSize:'1.5rem'}}>/mo</sub>
    </Typography>
    <Typography textAlign="center" variant='h6' fontWeight="bold"> +3 months FREE</Typography>
           <Box
           sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            mt:2  
           }}
           >
            <Button
            variant='contained'
            sx={{width:'200px'}}
            > Add to cart</Button>
           </Box>
           <Typography
           textAlign="center"
           sx={{mt:3}}
           >
           $ 6.99/mo when you renew
           </Typography>
           </Box>
           <Divider sx={{mt:3, border: '0.5px solid rgba(0,0,0,0.15)'}}/>
           <CardContent>
            <Typography variant='h6' sx={{
              m:2,
              fontWeight:'bold'
            }}>
              Top Features
            </Typography>
            {features.map((val, ind)=> {
              return(
                <Box sx={{display:'flex', mt:1.5}}>
            <DoneIcon 
            sx={{color:'red', mr:1}}
            />
            <Typography>
              <Typography sx={{fontWeight:'bold', display:'inline'}}> 
              {val.first}  </Typography>
              {val.sec}
            </Typography>
            </Box>
              )
            })}
            
           </CardContent>
           
           </Card>
          </Grid>
          <Grid item
          lg={4}
          md={4}
          sm={12}
          >
           <Card
           elevation={3}
           sx={{p:3, border: '1px solid rgba(0,0,0,0.25)'}}
           >
            <CardHeader title={<Typography variant="h4" sx={{textAlign:'center', fontWeight:'bold'}}>Premium</Typography>} /> 
            <Typography  sx={{textAlign:'center',}}>Everything you need to create your website</Typography>
           <Box sx={{display:'flex',mt:2, justifyContent:'center', alignItems:'center'}}>
           <Typography sx={{textDecoration:'line-through', color:'#898989'}} > $11.99</Typography>
           <Chip label="Save 75%" sx={{ml:1}}/> 
           </Box>
           <Box sx={{mt:2}}>
           <Typography variant="body1" textAlign="center">
           <sub style={{fontSize:'1.5rem'}}>$</sub>
      <Typography variant="body1" sx={{ fontSize: '3rem', display: 'inline', fontWeight:'bold' }}>
        2.99
      </Typography>
      <sub style={{fontSize:'1.5rem'}}>/mo</sub>
    </Typography>
    <Typography textAlign="center" variant='h6' fontWeight="bold"> +3 months FREE</Typography>
           <Box
           sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            mt:2  
           }}
           >
            <Button
            variant='contained'
            sx={{width:'200px'}}
            > Add to cart</Button>
           </Box>
           <Typography
           textAlign="center"
           sx={{mt:3}}
           >
           $ 6.99/mo when you renew
           </Typography>
           </Box>
           <Divider sx={{mt:3, border: '0.5px solid rgba(0,0,0,0.15)'}}/>
           <CardContent>
            <Typography variant='h6' sx={{
              m:2,
              fontWeight:'bold'
            }}>
              Top Features
            </Typography>
            {features.map((val, ind)=> {
              return(
                <Box sx={{display:'flex', mt:1.5}}>
            <DoneIcon 
            sx={{color:'red', mr:1}}
            />
            <Typography>
              <Typography sx={{fontWeight:'bold', display:'inline'}}> 
              {val.first}  </Typography>
              {val.sec}
            </Typography>
            </Box>
              )
            })}
            
           </CardContent>
           
           </Card>
          </Grid>
          <Grid item
          lg={4}
          md={4}
          sm={12}
          >
           <Card
           elevation={3}
           sx={{p:3, border: '1px solid rgba(0,0,0,0.25)'}}
           >
            <CardHeader title={<Typography variant="h4" sx={{textAlign:'center', fontWeight:'bold'}}>Premium</Typography>} /> 
            <Typography  sx={{textAlign:'center',}}>Everything you need to create your website</Typography>
           <Box sx={{display:'flex',mt:2, justifyContent:'center', alignItems:'center'}}>
           <Typography sx={{textDecoration:'line-through', color:'#898989'}} > $11.99</Typography>
           <Chip label="Save 75%" sx={{ml:1}}/> 
           </Box>
           <Box sx={{mt:2}}>
           <Typography variant="body1" textAlign="center">
           <sub style={{fontSize:'1.5rem'}}>$</sub>
      <Typography variant="body1" sx={{ fontSize: '3rem', display: 'inline', fontWeight:'bold' }}>
        2.99
      </Typography>
      <sub style={{fontSize:'1.5rem'}}>/mo</sub>
    </Typography>
    <Typography textAlign="center" variant='h6' fontWeight="bold"> +3 months FREE</Typography>
           <Box
           sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            mt:2  
           }}
           >
            <Button
            variant='contained'
            sx={{width:'200px'}}
            > Add to cart</Button>
           </Box>
           <Typography
           textAlign="center"
           sx={{mt:3}}
           >
           $ 6.99/mo when you renew
           </Typography>
           </Box>
           <Divider sx={{mt:3, border: '0.5px solid rgba(0,0,0,0.15)'}}/>
           <CardContent>
            <Typography variant='h6' sx={{
              m:2,
              fontWeight:'bold'
            }}>
              Top Features
            </Typography>
            {features.map((val, ind)=> {
              return(
                <Box sx={{display:'flex', mt:1.5}}>
            <DoneIcon 
            sx={{color:'red', mr:1}}
            />
            <Typography>
              <Typography sx={{fontWeight:'bold', display:'inline'}}> 
              {val.first}  </Typography>
              {val.sec}
            </Typography>
            </Box>
              )
            })}
            
           </CardContent>
           
           </Card>
          </Grid>

        </Grid>
      </Box>
    </div>
  )
}

export default LandingContent
