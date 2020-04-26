import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Homepage.module.scss';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const demoTitles = [
  {id: 1, title: 'Time for planning holidays!'},
  {id: 2, title: 'Charity collection "Give us your clothes"'},
  {id: 3, title: 'New solution for mosquito'},
  {id: 4, title: 'Dangerous turn!'},
  {id: 5, title: 'It\'s worthwhile to take a walk'},
  {id: 6, title: 'Only 2 weeks left to our trip!'},
];

const Component = ({className}) => (
  <div className={clsx(className, styles.root)}>
    <h1>Bulletin Board</h1>
    <ul className={styles.titlesList}>
      {demoTitles.map(title => (
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
