import './App.css'
import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import ProtectedRoute from './components/ProtectedRoute'

import ThemeContext from './context/ThemeContext'
import VideoItemDetails from './components/VideoItemDetails'
import LoginForm from './components/LoginForm'
import NotFound from './components/NotFound'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'

// Replace your code here
class App extends Component {
  state = {isDark: false, isHamburgerActive: false}

  changeHamburgerActive = () => {
    this.setState(prevState => ({
      isHamburgerActive: !prevState.isHamburgerActive,
    }))
  }

  changeTheme = () => {
    this.setState(prevState => ({
      isDark: !prevState.isDark,
    }))
  }

  render() {
    const {isDark, isHamburgerActive} = this.state
    return (
      <ThemeContext.Provider
        value={{
          isDark,
          changeTheme: this.changeTheme,
          isHamburgerActive,
          changeHamburgerActive: this.changeHamburgerActive,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/saved" component={SavedVideos} />
          <ProtectedRoute path="/videos/:id" component={VideoItemDetails} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}
export default App
