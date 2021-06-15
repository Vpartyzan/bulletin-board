import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getUser } from '../../../redux/userRedux';
import { getAll } from '../../../redux/postsRedux';

import styles from './Post.module.scss';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const Component = ({className, match, user, posts}) => {
  return (
    <div className={clsx(className, styles.root)}>      
      {posts.filter( post => post.id === match.params.id ).map( post => (
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
              <p>Phone: {post.phone}</p>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={3} className={styles.card}>
              <h2>{post.title}</h2>
              <p>Price: {post.price}</p>
              <h3>Description:</h3>
              <p>{post.description}</p>
            </Paper>
          </Grid>
          {user.logged && user.id === post.userId
            ? <Button
              variant="contained"
              color="primary"
              className={styles.button}
              href={`/post/${post.id}/edit`}
              >Edit post</Button>
            : ''
          }             
        </Grid>
      ))}             
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

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  //Component as Post,
  Container as Post,
  Component as PostComponent,
};
