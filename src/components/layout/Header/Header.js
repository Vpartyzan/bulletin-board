import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';

import { connect } from 'react-redux';
import { getUser } from '../../../redux/userRedux';

import styles from './Header.module.scss';

const Component = ({className, user}) => {
  return (
    <div className={clsx(className, styles.root)}>
      <AppBar position="static">
        <Toolbar className={clsx(styles.wrapper)}>
          <IconButton component={NavLink} to="/" edge="start" color="inherit" aria-label="menu">
            <HomeIcon /> 
          </IconButton>
          <nav>
            {user.logged 
              ? <div>
                <Button href="#" color="inherit">My posts</Button>
                <Button href="#" color="inherit">Logout</Button>
              </div>
              : <Button href="https://google.com" color="inherit">Login</Button>
            }            
          </nav>        
        </Toolbar>
      </AppBar>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  user: PropTypes.object,
};

const mapStateToProps = state => ({
  user: getUser(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  //Component as Header,
  Container as Header,
  Component as HeaderComponent,
};
