import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { Header } from '../../layout/Header/Header';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/postsRedux';

import styles from './Homepage.module.scss';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const Component = ({ posts, className}) => (
  <div className={clsx(className, styles.root)}>
    <Header logged={false}/>
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

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  posts: PropTypes.array,
};

const mapStateToProps = state => ({
  posts: getAll(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as Homepage,
  Container as Homepage,
  Component as HomepageComponent,
};
