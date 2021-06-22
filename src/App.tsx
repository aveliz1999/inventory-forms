import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Form from "./pages/Form/Form"

export default function App() {
  return <BrowserRouter>
    <Switch>
      <Route exact path="/form/:formId">
        <Form/>
      </Route>
    </Switch>
  </BrowserRouter>
}