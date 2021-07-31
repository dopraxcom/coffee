import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { TextField, InputLabel, Input, InputAdornment, IconButton, Button, ThemeProvider, useMediaQuery  } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Redirect } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreator, State } from '../../state';


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

interface States {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

interface User {
  username : string | number,
  password : String | number | undefined
}

const Login = () => {


  const dispatch = useDispatch();
  const { checkLoginAdmin }  = bindActionCreators(actionCreator, dispatch);
    const [values, setValues] = React.useState<States>({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });

    const [user , setUser ] = React.useState('');


      const handleChange = (prop: keyof States) => (event: React.ChangeEvent<HTMLInputElement>) => {
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

      const json =  ({"username": username, "password": password});
      try {
        const response = await checkLogin(json).then( value => {
          if(value === 202 ){
            setLoggedIn(true);
            checkLoginAdmin(true)
          }else {
            setLoggedIn(false)
            checkLoginAdmin(false)
          }
        })
      }
      catch(err) {
        console.log(err)
      }
      
      }
      const [loggedIn , setLoggedIn ] = React.useState<boolean>(false)
      const checkLogin = (json:User) => {
        let js = JSON.stringify(json);
        return new Promise((res, rej) => {
          let xhttp = new XMLHttpRequest();
          xhttp.open("POST", "http://localhost:9006/super-admin/login");
          xhttp.send(js);
          xhttp.onreadystatechange = () => {
            res(xhttp.status)
          }
        })
      }
      if (loggedIn) {
        return <Redirect to='/home'/>;
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