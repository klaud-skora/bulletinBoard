import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Header.module.scss';

const Component = ({className, children, logged}) => (
  <div className={clsx(className, styles.root)}>
    <nav>
      {
        !logged
          ? <Button className={styles.link} component={NavLink} exact to={process.env.PUBLIC_URL +'/login'} activeClassName='active'>Log in</Button>
          : (
            <div>
              <Button className={styles.link} component={NavLink} exact to={process.env.PUBLIC_URL +'/post/add'} activeClassName='active'>Add post</Button>
              <Button className={styles.link} component={NavLink} exact to={process.env.PUBLIC_URL +'/posts'} activeClassName='active'>My posts</Button>
              <Button className={styles.link} component={NavLink} exact to={process.env.PUBLIC_URL +'/logout'} activeClassName='active'>Log out</Button>
            </div>)
      }
    </nav>
    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  logged: PropTypes.bool,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Header,
  // Container as Header,
  Component as HeaderComponent,
};
