import React from 'react';
import Navbar from "./components/Navbar";
import TodoListPage from "./pages/TodoListPage";
import {Route, Switch} from "react-router-dom";
import AboutPage from "./pages/AboutPage";

export interface IApp {
  checked: boolean;
  id: number,
  name: string;
}

const App: React.FC = () => {

  return (
    <>
      <Navbar/>
      <Switch>
        <Route path='/' component={TodoListPage} exact/>
        <Route path='/about' component={AboutPage}/>
      </Switch>
    </>
  )
};

export default App;
