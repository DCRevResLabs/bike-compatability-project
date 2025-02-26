import React from "react";
import { Route, Redirect } from "react-router-dom";

const AdminRoute = ({ role, component: Component, ...rest }) => {
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) =>
        role === "admin" ? (
          <Component {...props} />
        ) : (
          <Redirect to="/components" />
        )
      }
    />
  );
};

export default AdminRoute;
