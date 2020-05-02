import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { initialState } from './../../../redux/initialState';

import styles from './Post.module.scss';

const Component = ({className, match}) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.post}>
      <h2>{initialState.posts.data[match.params.id].title}</h2>
      <div>{initialState.posts.data[match.params.id].text}</div>
      <div className={styles.info}>
        <div className={styles.dates}>
          <div className={styles.date}>
            <h6>Published:</h6>
            <p>{initialState.posts.data[match.params.id].published}</p>
          </div>
          <div className={styles.date}>
            <h6>Upated:</h6>
            <p>{initialState.posts.data[match.params.id].updated}</p>
          </div>
        </div>
        <div className={styles.contact}>
          <h6>Contact author: </h6>
          <p>{initialState.posts.data[match.params.id].email}</p>
        </div>
      </div>
    </div>

  </div>
);
Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  match: PropTypes.object,
  elo: PropTypes.string,
};


export {
  Component as Post,
  // Container as Post,
  Component as PostComponent,
};
