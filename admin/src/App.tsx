import React from 'react';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, Button, IconButton  } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import {  
  List, 
  Divider, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  SwipeableDrawer, 
  Box } from '@material-ui/core';

import Home   from './componenet/home/Home';
import Store  from './componenet/store/Store';
import Orders from './componenet/orders/Orders';
import SingleOrder from './componenet/orders/SingleOrder';

const useStyle = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      fontFamily: 'Vazir',
    },
    login: {
      fontFamily: 'Vazir',
    },
    list: {
      width: 250,
    },
    font: {
      fontFamily: 'Vazir',
    },
    main: {
      marginTop: 60
    },
  })
);

function App() {
  const classes = useStyle();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Router>
      <AppBar>
        <Toolbar>
          <IconButton 
          edge="start" 
          className={classes.menuButton} 
          color="inherit" 
          aria-label="menu"
          onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            
          </Typography>
          <SwipeableDrawer
          anchor="left"
          open={open}
          onClose={() =>setOpen(false)}
          onOpen={() => {}}
          >
            <div>
              <Box textAlign="center" p={2}></Box>
              <Divider />
              <List className={classes.list}>
                <ListItem button component={Link} to="/" onClick={() => setOpen(false)}>
                  <ListItemText primary={'خانه'} />
                </ListItem>
                <ListItem button component={Link} to="/store" onClick={() => setOpen(false)}>
                  <ListItemText primary={'انبار'} />
                </ListItem>
                <ListItem button component={Link} to="/orders" onClick={() => setOpen(false)} >
                  <ListItemText  primary={'سفارشات'} />
                </ListItem>
                <ListItem button onClick={() => setOpen(false)}>
                  <ListItemText primary={'صندوق'} />
                </ListItem>
              </List>
            </div>
          </SwipeableDrawer>
          <Button color="inherit" className={classes.login}>وردو</Button>
        </Toolbar>
      </AppBar>
    <div className={classes.main}>
      <Switch>
        <Route path="/store"  component = {Store} />
        <Route path="/orders" exact component = {Orders} />
        <Route path="/orders/:id" component = {SingleOrder}  />
        <Route path="/"       component = {Home}  />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
