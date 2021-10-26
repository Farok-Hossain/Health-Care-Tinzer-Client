import { Redirect, Route } from "react-router";
import useAuth from "../../hooks/useAuth";

function PrivateRoute({ children, ...rest }) {
  let { user, isLoading } = useAuth();

  console.log(isLoading);

  if (isLoading) {
    return <h4>Lading...</h4>;
  }
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
