import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router';

import { connect } from 'react-redux';
// import { getAll } from '../../../redux/postsRedux';

import styles from './Header.module.scss';

const Component = ({className, children, state, match}) => {
  const home = match.isExact;

  return(
    <div className={clsx(className, styles.root)}>
      <nav>
        {
          !state.logged
            ? <Button className={styles.link} component={NavLink} exact to={process.env.PUBLIC_URL +'/login'} activeClassName='active'>Log in</Button>
            : (
              <div>
                { home ? '' : <Button className={styles.link} component={NavLink} exact to={process.env.PUBLIC_URL +'/'} activeClassName='active'>Homepage</Button> }
                <Button className={styles.link} component={NavLink} exact to={process.env.PUBLIC_URL +'/post/add'} activeClassName='active'>Add post</Button>
                <Button className={styles.link} component={NavLink} exact to={process.env.PUBLIC_URL +'/posts'} activeClassName='active'>My posts</Button>
                <Button className={styles.link} component={NavLink} exact to={process.env.PUBLIC_URL +'/logout'} activeClassName='active'>Log out</Button>
              </div>)
        }
      </nav>
      {children}
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  state: PropTypes.object,
  match: PropTypes.object,
};

const ComponentWithRouter = withRouter(Component);

const mapStateToProps = state => ({
  state: state,
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(ComponentWithRouter);

export {
  // Component as Header,
  Container as Header,
  Component as HeaderComponent,
};
