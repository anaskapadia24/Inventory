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
import Dashboard from "../Components/DASHBOARD/Dashboard";
function App() {
  const [Users, setUsers] = useState("")

  const OnusernameChange = (value) => {
    setUsers(value)
    console.log(value)
  }
  return (
    <ProfileProvider>
      <Switch>

        <Route exact path="/">
          <StartupPage />
        </Route>

        <PublicRouter exact path="/signin">
          <Signpage Users={Users} />
        </PublicRouter>

        <PrivateRouter path="/Dashboard">  
          <Home />
        </PrivateRouter>

        <Route path="/Register">
          <Register Users={Users} OnusernameChange={OnusernameChange} />
        </Route>
        
        <Route path="***">
          <Error />
        </Route>
        <Route path="/Dashboard/***">
          <Error/>
        </Route>
      </Switch>
    </ProfileProvider>

  )
}

export default App;
