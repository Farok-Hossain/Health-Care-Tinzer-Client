import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import initializationAuthentication from "./firebase/firebase.init";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Shared/Header/Header";
import Footer from "./components/Shared/Footer/Footer";
import AuthProvider from "./context/AuthProvider";
import TopHeader from "./components/Shared/TopHeader/TopHeader";
import Home from "./pages/Home/Home";
import NotFound from "./components/Notfound/Notfound";
import About from "./pages/About/About";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";

initializationAuthentication();

function App() {
  return (
    <AuthProvider>
      <Router>
        <TopHeader />
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/sign-in">
            <SignIn />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
