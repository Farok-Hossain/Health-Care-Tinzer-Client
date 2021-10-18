import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import initializationAuthentication from "./firebase/firebase.init";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Shared/Header/Header";
import Footer from "./components/Shared/Footer/Footer";
import AuthProvider from "./context/AuthProvider";
import TopHeader from "./components/Shared/TopHeader/TopHeader";
import Home from "./pages/Home/Home";
import NotFound from "./components/Notfound/Notfound";

initializationAuthentication();

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <TopHeader />
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
