import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getUser } from '../../../redux/userRedux';
import { getAll, addPost } from '../../../redux/postsRedux.js';

import shortid from 'shortid';

import styles from './PostAdd.module.scss';

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Component = ({className, user, addPost}) => {
  const today = new Date();
  const date = today.getDate() + '.' + today.getMonth() + '.' + today.getFullYear();

  const [post, setPost] = React.useState({
    id: shortid.generate(),
    userId: user.id,
    createDate: date,
    updateDate: '',
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    await addPost(post);
  };

  const handleChange = async (event, name) => {
    await setPost({
      ...post,
      [name]: event.target.value,
    });
  };

  return (
    <div className={clsx(className, styles.root)}>
      {user.logged
        ? <Paper elevation={3} className={styles.card}>
            <form className={styles.form} autoComplete="off" onSubmit={e => onSubmit(e)}>
              <TextField 
                id="standard-basic" 
                className={styles.input} 
                variant="outlined" 
                autoComplete="off" 
                label="Title"
                onChange={e => handleChange(e, 'title')} 
              />      
              <TextField 
                id="standard-basic" 
                className={styles.input} 
                variant="outlined" 
                autoComplete="off" 
                label="Phone"
                onChange={e => handleChange(e, 'phone')} 
              />      
              <TextField 
                id="standard-basic" 
                className={styles.input} 
                variant="outlined" 
                autoComplete="off" 
                label="Price"
                onChange={e => handleChange(e, 'price')} 
              />      
              <TextField 
                id="outlined-multiline-static" 
                className={styles.input} 
                multiline
                rows={4}
                variant="outlined" 
                autoComplete="off" 
                label="Description"
                onChange={e => handleChange(e, 'description')} 
              />
              <input 
                id="upload-photo" 
                className={styles.img} 
                accept="image/*" 
                multiple 
                type="file"
                onChange={e => handleChange(e, 'image')}
              />
              <Button 
                type="submit" 
                className={styles.button} 
                color="primary" 
                variant="contained"
              >Add New Post</Button>
            </form>      
          </Paper>
        : "Please Log In"
      }      
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object,
};

const mapStateToProps = state => ({
  user: getUser(state),
});

const mapDispatchToProps = dispatch => ({
  addPost: post => dispatch(addPost(post)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as PostAdd,
  Container as PostAdd,
  Component as PostAddComponent,
};
