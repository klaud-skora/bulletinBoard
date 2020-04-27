import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { Header } from '../../layout/Header/Header';
import { initialState } from '../../../redux/initialState';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Homepage.module.scss';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const Component = ({className}) => (
  <div className={clsx(className, styles.root)}>
    <Header logged={false}/>
    <h1>Bulletin Board</h1>
    <ul className={styles.titlesList}>
      {initialState.posts.data.map(title => (
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
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Homepage,
  // Container as Homepage,
  Component as HomepageComponent,
};
