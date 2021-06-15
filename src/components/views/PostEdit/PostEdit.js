import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getUser } from '../../../redux/userRedux';
import { getAll, updatePost } from '../../../redux/postsRedux';

import styles from './PostEdit.module.scss';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Component = ({className, match, user, updatePost, posts}) => {
  const postArray = posts.filter(el => el.id === match.params.id);
  const [post, setPost] = React.useState(postArray[0]);

  const onSubmit = async (e) => {
    e.preventDefault();
    await updatePost(post);
  };

  const handleChange = async (e, name) => {
    await setPost({
      ...post,
      [name]: e.target.value,
    });
  };

  return (
    <div>
      {user.logged
        ? <form className={clsx(className, styles.root)} onSubmit={e => onSubmit(e)}>      
            <Grid container spacing={1}>
              <Grid item xs={8}>
                <Paper elevation={3} className={styles.card}>
                  <CardMedia
                    component="img"
                    className={styles.media}
                    alt="post image"
                    image={post.image}
                    title={post.title}
                  />
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper elevation={3} className={styles.card}>
                  <h3>Author: {post.userName}</h3>
                  <TextField 
                    id="standard-basic" 
                    className={styles.input} 
                    autoComplete="off"
                    label="Phone"
                    value={post.phone}
                    onChange={e => handleChange(e, 'phone')} 
                  />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper elevation={3} className={styles.card}>
                  <h2>{post.title}</h2>
                  <TextField 
                    id="standard-basic" 
                    className={styles.input} 
                    autoComplete="off" 
                    label="Price"
                    value={post.price}
                    onChange={e => handleChange(e, 'price')} 
                  /> 
                  <br/>
                  <TextField 
                    id="outlined-multiline-static" 
                    className={styles.description} 
                    multiline
                    rows={4} 
                    autoComplete="off" 
                    label="Description"
                    value={post.description}
                    onChange={e => handleChange(e, 'description')} 
                  />
                </Paper>
              </Grid>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={styles.button}                          
              >Update post</Button>         
            </Grid>             
        </form>
        : 'Please Log In'
      }
    </div>
  );
};

Component.propTypes = {
  user: PropTypes.object,
  posts: PropTypes.array,
  className: PropTypes.string,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

const mapStateToProps = state => ({
  posts: getAll(state),
  user: getUser(state),
});

const mapDispatchToProps = dispatch => ({
  updatePost: post => dispatch(updatePost(post)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as PostEdit,
  Container as PostEdit,
  Component as PostEditComponent,
};
