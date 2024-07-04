import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Header from './components/Header/Header';
import { HashRouter,   BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Layout from './components/AdminPannel/components/Layout/Layout'
import Login from './components/AdminPannel/pages/login/Login';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
    <Switch>       
        <Route path="/" component={Header} />
        <Route path="/admin" component={Layout} />
        <Route path="/login" component={Login} />
        <Route component={Error} /> 
      </Switch>
    </Router>
    </>
  )
}

export default App
