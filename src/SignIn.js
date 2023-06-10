import React from 'react'
import Grid from '@mui/material/Grid'
import { Avatar, Box, Checkbox, CssBaseline, FormControlLabel, Paper, TextField, Typography, Button, Link } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
export default function SignIn() {

    const handleSubmit = (event) =>{
        console.log(event)
    }
  return (
   <>
        <Grid 
            container
            component="main"
            sx={{height:'100vh'}} >
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{backgroundImage:'URL(https://source.unsplash.com/random?wallpapers)'}} />
                <Grid
                    item xs={12} sm={8} md={5}
                    component={Paper} elevation={6} square={true} bgcolor='white'
                >
                    <Box
                        sx={{
                            my:8,
                            mx:4,
                            display:'flex',
                            flexDirection:'column',
                            alignItems:'center',
                            backgroundColor:'white'

                        }}>
                            <Avatar sx={{m:1,bgcolor:'primary.main'}}>
                               <LockOutlinedIcon/> 
                            </Avatar>
                            <Typography component="h1" varient="h5">
                                Sign In
                            </Typography>
                            <Box component='form' noValidate submite={handleSubmit} sx={{mt:1}}>
                                <TextField
                                    margin='normal'
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autofocus
                                ></TextField>
                                <TextField
                                    margin='normal'
                                    required
                                    fullWidth
                                    id="password"
                                    label="Password"
                                    name="password"
                                    autoComplete="current-password"
                                    autofocus
                                ></TextField>
                                <FormControlLabel
                                    control={<Checkbox value='remember' color='primary'></Checkbox>
                                            }
                                    label="Remember me"
                                />
                                <Button 
                                    type='submit'
                                    varient='contained'
                                    fullWidth
                                    sx={{mt:3,mb:2,backgroundColor:'lightblue'}}>
                                Sign In </Button>
                                <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
                                
                                

                            </Box>
                    </Box>
                </Grid>
                

        </Grid>
   </>
  )
}
