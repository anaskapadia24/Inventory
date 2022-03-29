import React from "react";
import { Switch, Route } from "react-router-dom";
import StartupPage from "../pages/StartupPage";
import 'rsuite/dist/styles/rsuite-default.css';
import '../Styles/main.scss'
import '../App.css'
import Signpage from "../Components/SIGNPAGE/Signpage";
import Home from "../pages/Home";
import PrivateRouter from "../Components/PrivateRouter";
import PublicRouter from "../Components/PublicRouter";
import Register from "../Components/SIGNPAGE/Register";
import { ProfileProvider } from "../context/Profile.context";
import '../All.css'
import Errorpage from "../ERROR/Errorpage";

function App() {
  return (
    <ProfileProvider>
    <Switch>

       <Route exact path="/">
      <StartupPage/>
      </Route>

      <PublicRouter exact path="/signin">
      <Signpage/>
      </PublicRouter>

      <PrivateRouter path="/home">
      <Home/>
      </PrivateRouter>

      <Route path="/Register">
        <Register/>
      </Route> 

      <Route>
      <Errorpage/>
      </Route>
    </Switch>
    </ProfileProvider>
  )
}

export default App;

