import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { TextField, InputLabel, Input, InputAdornment, IconButton, Button, ThemeProvider, useMediaQuery  } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import axios from 'axios'

const useStyle = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            width: '300px',
            margin: '0 auto',
            direction: 'rtl',
            fontFamily: 'vazir',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginTop: '60%',

            [theme.breakpoints.up('sm')]: {
                marginTop: '15%',
              },

            "& .MuiFormLabel-root": {
                right: "0",
                fontFamily: 'vazir'
              },
            "& .MuiInputBase-root" : {
               width: '100%' 
            }
          },
          text: {
            marginBottom: '20px',
            width: '100%'
          },
          btn: {
              display: 'block',
              marginTop: '50px',
              width: '100%',
              fontFamily: 'vazir',
          },
    })
)

interface State {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

interface User {
  username : string | number
}


const Login = () => {

    const [values, setValues] = React.useState<State>({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });

    const [user , setUser ] = React.useState('');


      const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
      };
      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };

      const hanldeChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) =>  {
        setUser(e.target.value)        
      }
    
      const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
      };  
    const classes = useStyle()

    const login = async (username: string | number, password?:string | number) => {
      const json = JSON.stringify({username: username, password: password})
      const headers = {"Access-Control-Allow-Origin": "*"}
      const httpProxy = require('http-proxy');
      const proxy = httpProxy.createProxyServer({});
        const response = await axios.post('http://localhost:9006/super-admin/login',
        json, {
          headers: headers
        })
        .then ( response => {
          console.log(response)
        })
        .catch(err => {
          console.log('Error: ',err)
        })
      }

    return(
            <div className={classes.root}>
                <TextField 
                  className={classes.text} 
                  onChange={hanldeChangeUsername}
                  value={user} 
                  label="نام کاربری" 
                  required />
                <InputLabel htmlFor="standard-adornment-password" required>رمز عبور</InputLabel>
                <Input
                    id="standard-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        >
                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                    }
                />
                    <Button onClick={() => {login(user,values.password)}} className={classes.btn} variant="contained" color="primary">ورود</Button>
            </div>
    )
}


export default Login;