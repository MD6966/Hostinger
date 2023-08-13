import React from 'react'
import { Button, styled, TextField, Stack } from '@mui/material'
import { RotatingLines } from 'react-loader-spinner'
import { Link } from 'react-router-dom'


const StyledButton = styled(Button)(({theme})=> ({
    margin:'10px 0',
    background:theme.palette.primary.main,
    '&:hover' : {
        background:theme.palette.secondary.main
    }
}))
const AdminLoginForm = () => {
    const [loading, setLoading] = React.useState(false)
    const initialValues = {
        email:'',
        password:''
    }
    const [formValues, setFormValues] = React.useState(initialValues)
    const handleChange = (e) => {
        const {name, value} = e.target
        setFormValues({...formValues, [name]:value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>

<Stack>
<TextField label='Email' sx={{mb:'1rem', width:'350px',}} 
name='email'  value={formValues.email} onChange={handleChange} required
autoComplete='off'
/>
<TextField label='Password' sx={{mb:'1rem', width:'350px',}} 
name='password' value={formValues.password} onChange={handleChange} required 
autoComplete='off'
type="password" />
{
  loading ? <StyledButton type='submit' variant='disabled'>    <RotatingLines
  strokeColor="white"
  strokeWidth="5"
  animationDuration="0.75"
  width="30"
  visible={loading}/> </StyledButton> :
  <StyledButton type='submit' sx={{color:'#fff'}}
  component = {Link}
  to='/admin/dashboard'
  > Login </StyledButton>
}

</Stack>
</form>
    </div>
  )
}

export default AdminLoginForm
