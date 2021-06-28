import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Form from "./pages/Form/Form"
import Login from "./pages/Login/Login";

export default function App() {
  return <BrowserRouter>
    <Switch>
      <Route exact path="/form/:formId">
        <Form/>
      </Route>
      <Route exact path="/login">
        <Login/>
      </Route>
    </Switch>
  </BrowserRouter>
}