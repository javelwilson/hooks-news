import React from 'react'
import { withRouter, NavLink } from 'react-router-dom'

const Header = () => {
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
        <span className='divider'>|</span>
        <NavLink to='/create' className='header-link'>
          submit
        </NavLink>
      </div>
      <div className='flex'>
        <NavLink to='/login' className='header-link'>
          login
        </NavLink>
      </div>
    </div>
  )
}

export default withRouter(Header)
