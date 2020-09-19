import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import CreateLink from './components/Link/CreateLink'
import Login from './components/Auth/Login'
import ForgetPassword from './components/Auth/ForgetPassword'
import SearchLinks from './components/Link/SearchLinks'
import LinkList from './components/Link/LinkList'
import LinkDetail from './components/Link/LinkDetail'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={() => <Redirect to='/news/1' />} />
        <Route path='/create' component={CreateLink} />
        <Route path='/login' component={Login} />
        <Route path='/forgot' component={ForgetPassword} />
        <Route path='/search' component={SearchLinks} />
        <Route path='/top' component={LinkList} />
        <Route path='/new/:page' component={LinkList} />
        <Route path='/link/:linkId' component={LinkDetail} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
