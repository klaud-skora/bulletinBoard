import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { NotFound } from '../NotFound/NotFound';
import { connect } from 'react-redux';
import { updatePost } from '../../../redux/postsRedux.js';

import styles from './PostEdit.module.scss';

class Component extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    post: PropTypes.object,
    fetchData: PropTypes.func,
  };

  state = {
    title: 'new title',
    text: 'new text',
    email: 'new email',
  }

  submitChanges() {
    const { fetchData } = this.props;

    fetchData( this.state.title, this.state.text, this.state.email);

  }

  render() {
    const { className, post } = this.props;

    if(!post) {
      return <NotFound />;
    }

    const { title, text, email } = post;

    return(
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
          <button onClick={ (e) => this.submitChanges() }className={styles.submit} type="submit">Submit changes</button>
        </form>
      </div>
    );
  }
}


const mapStateToProps = (state, props) => ({
  post: state.posts[props.match.params.id],
});

const mapDispatchToProps = (dispatch, props) => ({
  fetchData: ( title, text, email) => dispatch(updatePost( props.match.params.id, title, text, email)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as PostEdit,
  Container as PostEdit,
  Component as PostEditComponent,
};
