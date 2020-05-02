import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { NotFound } from '../NotFound/NotFound';
import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './PostEdit.module.scss';

const Component = ({ post, className }) => {

  if(!post) {
    return <NotFound />;
  }

  const {title, text, email} = post;

  return (
    <div className={clsx(className, styles.root)}>
      <form className={styles.post}>
        <div className={styles.dataBox}>
          <h2 className={styles.title}>Title</h2>
          <input className={styles.window} type="text" defaultValue={title} minLength="10"></input>
        </div>
        <div className={styles.dataBox}>
          <h2 className={styles.title}>Post content</h2>
          <textarea className={styles.window} type="text" defaultValue={text} minLength="20"></textarea>
        </div>
        <div className={styles.dataBox}>
          <h2 className={styles.title}>Author&apos;s email</h2>
          <input className={styles.window} type="email" defaultValue={email}></input>
        </div>
        <button className={styles.submit} type="submit">Submit changes</button>
      </form>
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
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as PostEdit,
  Container as PostEdit,
  Component as PostEditComponent,
};
