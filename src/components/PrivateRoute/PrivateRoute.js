import { Redirect, Route } from "react-router";
import useAuth from "../../hooks/useAuth";

function PrivateRoute({ children, ...rest }) {
  let { user } = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/sign-in",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
