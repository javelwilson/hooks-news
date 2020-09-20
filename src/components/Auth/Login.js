import React from 'react'
import useFormValidation from './useFormValidation'
import validateLogin from './validateLogin'

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
}

const Login = () => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    isSubmitting,
  } = useFormValidation(INITIAL_STATE, validateLogin)
  const [login, setLogin] = React.useState(true)
  return (
    <div className=''>
      <h2 className='mv3'>{login ? 'Login' : 'Create Account'}</h2>
      <form className='flex flex-column' onSubmit={handleSubmit}>
        {!login && (
          <input
            type='text'
            placeholder='Your name'
            autoComplete='off'
            onChange={handleChange}
            name='name'
            value={values.name}
          />
        )}

        <input
          type='email'
          placeholder='Your email'
          autoComplete='off'
          onChange={handleChange}
          name='email'
          value={values.email}
          onBlur={handleBlur}
          className={errors.email && 'error-input'}
        />
        {errors.email && <p className='error-text'>{errors.email}</p>}
        <input
          type='password'
          placeholder='Choose a secret password'
          onChange={handleChange}
          name='password'
          value={values.password}
          onBlur={handleBlur}
          className={errors.password && 'error-input'}
        />
        {errors.password && <p className='error-text'>{errors.password}</p>}

        <div className='flex mt3'>
          <button
            type='submit'
            className='button pointer mr2'
            disabled={isSubmitting}
            style={{ background: isSubmitting ? 'grey' : 'orange' }}
          >
            Submit
          </button>
          <button
            type='button'
            className='button pointer'
            onClick={() => setLogin((prevLogin) => !prevLogin)}
          >
            {login ? 'Need to create an account?' : 'Already have an account?'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login
