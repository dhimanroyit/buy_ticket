import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from '../components/Home/Home';
import Header from '../components/Header/Header';
import SignUp from '../components/SignUp/SignUp';
import Login from '../components/Login/Login';
import Destination from '../components/Destination/Destination';
import firebaseInit from '../firebase/firebaseInit';
import loginContext from '../context/loginContext';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';

firebaseInit();

function App() {
  const [userLogin, setUserLogin] = useState({login: false});
  const [productTitle, setProductTitle] = useState("car")
  const userInfo = {
    userLogin,
    setUserLogin,
    productTitle,
    setProductTitle,
  }

  return (
    <Router>
      <loginContext.Provider value={userInfo}>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/destination/:product">
            <Destination />
          </PrivateRoute>
        </Switch>
      </loginContext.Provider>
    </Router>
  );
}

export default App;
