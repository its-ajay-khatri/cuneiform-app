import React, { createContext, useReducer } from "react";
import './App.css'
import { Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Navbar from './components/navbar';
import About from "./components/about";
import Contact from "./components/contact";
import Signup from "./components/signup";
import Login from "./components/login";
import ErrorPage from './components/errorpage';
import Logout from './components/logout';
import { initialState, reducer } from "./Reducer/useReducer";

  //context API
  export const UserContext = createContext();

const Routing = () => {
  return(
    <Switch>
          <Route exact path="/"><Home /></Route> 
          <Route path="/about" ><About /></Route>
          <Route path="/contact" ><Contact /></Route>
          <Route path="/signup" ><Signup /></Route>
          <Route path="/login" ><Login /></Route>
          <Route path="/logout" ><Logout /></Route>
          <Route path="*" ><ErrorPage /> </Route>
        </Switch>
  )
}

const App = () =>{

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
        <UserContext.Provider value={{state, dispatch}}>
          <Navbar />
          <Routing />
        </UserContext.Provider>
    </div>
  );
}

export default App;
