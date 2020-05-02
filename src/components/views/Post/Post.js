import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import { NotFound } from '../NotFound/NotFound';

import styles from './Post.module.scss';

const Component = ({ post, className, logged }) => {

  if(!post) {
    return <NotFound />;
  }

  const {title, text, published, updated, email} = post;

  return (
    <div className={clsx(className, styles.root)}>
      <div className={styles.post}>
        <h2>{title}</h2>
        <div>{text}</div>
        <div className={styles.info}>
          <div className={styles.dates}>
            <div className={styles.date}>
              <h6>Published:</h6>
              <p>{published}</p>
            </div>
            <div className={styles.date}>
              <h6>Upated:</h6>
              <p>{updated}</p>
            </div>
          </div>
          <div className={styles.contact}>
            <h6>Contact author: </h6>
            <p>{email}</p>
          </div>
        </div>
        {logged ? (
          <div>
            <Button className={styles.link} component={Link} to={process.env.PUBLIC_URL + `/post/${post.id}/edit`}><EditIcon/>Edit post</Button>
          </div>)
          : ''
        }
      </div>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  match: PropTypes.object,
  post: PropTypes.object,
  logged: PropTypes.bool,
};

const mapStateToProps = (state, props) => ({
  post: state.posts[props.match.params.id],
  logged: state.logged,
});

const Container = connect(mapStateToProps)(Component);

export {
  // Component as Post,
  Container as Post,
  Component as PostComponent,
};
