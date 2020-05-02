import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import { withRouter } from 'react-router';

import { Header } from '../../layout/Header/Header';
// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './MainLayout.module.scss';


const Component = ({className, children, location}) => {

  return(
    <div className={clsx(className, styles.root)}>
      {location.pathname === '/notfound' ? '' : <Header />}
      {children}
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  location: PropTypes.object,
};

const ComponentWithRouter = withRouter(Component);

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  ComponentWithRouter as MainLayout,
  // Container as MainLayout,
  Component as MainLayoutComponent,
};
