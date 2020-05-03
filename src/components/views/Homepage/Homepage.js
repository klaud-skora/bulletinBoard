import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll, loadPostsRequest } from '../../../redux/postsRedux';

import styles from './Homepage.module.scss';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

class Component extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    posts: PropTypes.array,
    loadPosts: PropTypes.func,
  };

  componentDidMount() {
    const { loadPosts } = this.props;
    loadPosts();
  }

  render() {
    const { className, posts } = this.props;
    return (
      <div className={clsx(className, styles.root)}>
        <h1>Bulletin Board</h1>
        <ul className={styles.titlesList}>
          {posts.map(post => (
            <Link key={post._id} className={styles.link} to={process.env.PUBLIC_URL + `/post/${post.id}`}>
              <ArrowForwardIosIcon /><li className={styles.listElement}>{post.title}</li>
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  posts: getAll(state),
});

const mapDispachToProps = dispatch => ({
  loadPosts: () => dispatch(loadPostsRequest()),
});

const Container = connect(mapStateToProps, mapDispachToProps)(Component);

export {
  // Component as Homepage,
  Container as Homepage,
  Component as HomepageComponent,
};
