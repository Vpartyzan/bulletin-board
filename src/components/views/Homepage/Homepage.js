import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import { getUser } from '../../../redux/userRedux';
import { getAll } from '../../../redux/postsRedux';

import styles from './Homepage.module.scss';

const Component = ({className, user, posts}) => {

  return (
    <div className={clsx(className, styles.root)}>
      {user.logged 
        ? <Button
          variant="contained"
          color="primary"
          className={styles.button}
          href={`/post/add`}
          >New post</Button>
        : ''
      }
      {posts.map( post => (
        <Card key={post.id} elevation={3} className={styles.card}>
          <CardMedia
            component="img"
            className={styles.media}
            alt="post image"
            image={post.image}
            title={post.title}
          />
          <CardHeader title={post.title} subheader={`${post.updateDate ? `updated: ${post.updateDate}` : `created: ${post.createDate}`}`} />
          <CardActions className={styles.link}>
            <Button size="small" color="secondary" variant="contained" href={`/post/${post.id}`}>
              Show details
            </Button>
          </CardActions>
        </Card>
      ))}  
    </div>
  );  
};

Component.propTypes = {
  children: PropTypes.node,
  user: PropTypes.object,
  posts: PropTypes.array,
};

const mapStateToProps = state => ({
  user: getUser(state),
  posts: getAll(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  //Component as Homepage,
  Container as Homepage,
  Component as HomepageComponent,
};
