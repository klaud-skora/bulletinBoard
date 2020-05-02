import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll } from './../../../redux/postsRedux';

import { NotFound } from '../NotFound/NotFound';

import styles from './Post.module.scss';

const Component = ({ posts, className, match }) => {

  const post = posts[match.params.id];
  const {title, text, published, updated, email} = post;

  return (
    post ?
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
        </div>
      </div>
      : <NotFound />
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  match: PropTypes.object,
  posts: PropTypes.array,
};

const mapStateToProps = state => ({
  posts: getAll(state),
});

const Container = connect(mapStateToProps)(Component);

export {
  // Component as Post,
  Container as Post,
  Component as PostComponent,
};
