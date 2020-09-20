import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Login from './Auth/Login'
import ForgetPassword from './Auth/ForgetPassword'
import SearchLinks from './Link/SearchLinks'
import LinkList from './Link/LinkList'
import LinkDetail from './Link/LinkDetail'
import CreateLink from './Link/CreateLink'
import Header from './Header'

function App() {
  return (
    <BrowserRouter>
      <div className='app-container'>
        <Header />
        <div className='route-container'>
          <Switch>
            <Route exact path='/' render={() => <Redirect to='/news/1' />} />
            <Route path='/create' component={CreateLink} />
            <Route path='/login' component={Login} />
            <Route path='/forgot' component={ForgetPassword} />
            <Route path='/search' component={SearchLinks} />
            <Route path='/top' component={LinkList} />
            <Route path='/news/:page' component={LinkList} />
            <Route path='/link/:linkId' component={LinkDetail} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App