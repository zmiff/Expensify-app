import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({
  isAutenticated,
  component: Component,
  ...rest
 }) => (
  <Route {...rest} component={(props) => (
    isAutenticated ? (
      <Redirect to="/dashboard" />
    ) : (
      <Component {...props}/>
    )
  )} />
);

const mapStateToProps = (state) => ({
  isAutenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PublicRoute)
