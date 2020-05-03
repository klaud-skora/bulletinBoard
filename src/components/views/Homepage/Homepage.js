import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAllPublished, fetchPublished } from '../../../redux/postsRedux';

import styles from './Homepage.module.scss';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const Component = ({ fetchPublishedPosts, posts, className}) => {
  return (
    <div className={clsx(className, styles.root)}>
      <h1>Bulletin Board</h1>
      <ul className={styles.titlesList}>
        {posts.map(title => (
          <Link key={title.id} className={styles.link} to={process.env.PUBLIC_URL + `/post/${title.id}`}>
            <ArrowForwardIosIcon /><li className={styles.listElement}>{title.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  posts: PropTypes.array,
  fetchPublishedPosts: PropTypes.func,
};

const mapStateToProps = state => ({
  posts: getAllPublished(state),
});

const mapDispachToProps = dispatch => ({
  fetchPublishedPosts: () => dispatch(fetchPublished()),
});

const Container = connect(mapStateToProps, mapDispachToProps)(Component);

export {
  // Component as Homepage,
  Container as Homepage,
  Component as HomepageComponent,
};
