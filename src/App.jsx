import React from 'react'
import { BrowserRouter as Router, Switch, Route }  from 'react-router-dom'
import Navbar from './components/navigation/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import Signin from './components/authentication/Signin'
import Signup from "./components/authentication/Signup"
import Profile from "./components/dashboard/Profile"
import CreatePost from './components/posts/CreatePost'

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/signin' component={Signin} />
            <Route path='/signup' component={Signup} />
            <Route path='/profile' component={Profile} />
            <Route path='/create' component={CreatePost} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
