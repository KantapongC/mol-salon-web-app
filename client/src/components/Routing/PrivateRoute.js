import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, auth: { isAuthenticated, isLoading }, ...rest }) => (
  <Route {...rest} render={props => (!isAuthenticated && !isLoading ? <Redirect to='/admin/login' /> : <Component {...props} />)} />
);

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps)(PrivateRoute);
