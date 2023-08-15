import { CheckBox } from '@mui/icons-material'
import { Box, Grid, TextField, Typography, styled, 
  FormControlLabel, Checkbox, Button, Stack, Card, 
  FormControl, Radio, RadioGroup } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
const CenteredBox = styled(Box)(({theme})=> ({
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    padding:theme.spacing(10)
}))
const StyledCard = styled(Card)(({theme}) => ({
  padding:theme.spacing(2),
  width:'60%',
  maxHeight:'35px',
  marginTop: theme.spacing(3),
  display:'flex',
  justifyContent:'space-between'
}))
const useStyles = makeStyles((theme)=> ({
    input: {
        marginBottom: theme.spacing(3)
    },
}))

const Checkout = () => {
    const classes = useStyles()
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
    const [value, setValue] = React.useState('');

  const handleChangeR = (event) => {
    setValue(event.target.value);
  };
  return (
    <div style={{height:'100vh', background:'#e2e2e2'}}>
      <CenteredBox>

        <Grid container spacing={3}>
           
            <Grid item
            lg={6}
            md={6}
            xs={12}
            >
                <Box>
                  <Typography variant='h4'
                  fontWeight="bold"
                  >
                    Select a payment method
                  </Typography>
                  <Stack>
                    <StyledCard
                    sx={{border: value=='paypal' ? '2px solid blue' : 'none'}}
                    >
                     <Box>
                     <FormControl>
                      <RadioGroup 
                      value={value}
                      onChange={handleChangeR}
                      >
                      <FormControlLabel value="paypal" control={<Radio />} label="PayPal"/>
                      </RadioGroup>
                      </FormControl>
                     </Box>
                     <Box>
                      <img src='/assets/images/pypal.png' width="120px"/> 
                     </Box>
                    </StyledCard>
                    <StyledCard
                    sx={{border: value=='stripe' ? '2px solid blue' : 'none'}}
                    >
                     <Box sx={{display:'flex'}}>
                      <FormControl>
                        <RadioGroup
                          value={value}
                          onChange={handleChangeR}
                        >
                      <FormControlLabel value="stripe" control={<Radio />} label="Stripe"/>
                        </RadioGroup>
                      </FormControl>
                     </Box>
                     <Box>
                      <img src='/assets/images/stripe.png' width="80px"/> 
                     </Box>
                    </StyledCard>
                  </Stack>
                </Box>
            </Grid>
            <Grid item
            lg={6}
            md={6}
            xs={12}
            >
              <Card
              elevation={3}
              sx={{p:3}}
              >

                <Grid container spacing={3}>
                    <Grid item lg={6} md={6} xs={12}>
                    <TextField fullWidth label="First Name" className={classes.input}/>
                    </Grid>
                    <Grid item lg={6} md={6} xs={12}>
                    <TextField fullWidth label="Last Name" className={classes.input}/>
                    </Grid>
                </Grid>
                    
                    <TextField fullWidth label="Billing Address" className={classes.input}/>
                    <Grid container spacing={3}>
                    <Grid item lg={6} md={6} xs={12}>
                    <TextField fullWidth label="Email" className={classes.input}/>
                    </Grid>
                    <Grid item lg={6} md={6} xs={12}>
                    <TextField fullWidth label="Phone" className={classes.input}/>
                    </Grid>
                </Grid>
                <Stack>

                <FormControlLabel control={<Checkbox     checked={checked}
                 onChange={handleChange} />} label="I accept the data protection policy and privacy policy" />
                    
               {
                 checked ?
                 <Button variant='contained'
                 sx={{mt:2,}}
                 >
                    Proceed to pay
                </Button>
                :
                <Button variant='disabled'
                sx={{mt:2,}}
                >
                    Proceed to pay
                </Button>
               }
                 </Stack>
               </Card>
            </Grid>
        </Grid>
      </CenteredBox>
    </div>
  )
}

export default Checkout
