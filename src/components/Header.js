import React from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import { FirebaseContext } from '../firebase'

const Header = () => {
  const { user, firebase } = React.useContext(FirebaseContext)
  return (
    <div className='header'>
      <div className='flex'>
        <img src='/logo.png' alt='Hooks News Logo' className='logo' />
        <NavLink to='/' className='header-title'>
          Hooks News
        </NavLink>
        <NavLink to='/' className='header-link'>
          news
        </NavLink>
        <span className='divider'>|</span>
        <NavLink to='/top' className='header-link'>
          top
        </NavLink>
        <span className='divider'>|</span>
        <NavLink to='/search' className='header-link'>
          search
        </NavLink>
        {user && (
          <>
            <span className='divider'>|</span>
            <NavLink to='/create' className='header-link'>
              submit
            </NavLink>
          </>
        )}
      </div>
      <div className='flex'>
        {user ? (
          <>
            <div className='header-name'>{user.displayName}</div>
            <div className='divider'>|</div>
            <div className='header-button' onClick={() => firebase.logout()}>
              logout
            </div>
          </>
        ) : (
          <NavLink to='/login' className='header-link'>
            login
          </NavLink>
        )}
      </div>
    </div>
  )
}

export default withRouter(Header)
