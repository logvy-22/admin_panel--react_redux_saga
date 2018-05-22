import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';

import MainBlock from '../../containers/main-block'
import Aside from '../aside/index'
import Modal from '../../containers/modal/index'

class App extends Component {

  render() {
    return (<div className="App">
        <AppBar position="fixed">
          <Toolbar>
            <IconButton className="App-menu-btn" color="inherit" aria-label="Menu">
              <Icon> menu </Icon>
            </IconButton>
            <Typography variant="title" color="inherit" className="App-header-title">
              React Admin
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>

        <div className="App-intro">
          <Aside />
          <MainBlock />
          <Modal />
        </div>
      </div>
    );
  }
}

export default App;
