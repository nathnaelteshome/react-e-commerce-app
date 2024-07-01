import { useState } from 'react'
import './login.scss'
import { login } from '../../redux/apiCalls'
import { useDispatch, useSelector } from 'react-redux'
import { CircularProgress } from '@mui/material'

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const {isFetching,error} = useSelector((state)=>(state.user))

  const handleClick = (e) => {
    e.preventDefault()
    login(dispatch, { username, password })
  }

  return (
    <div className='loginContainer'>
      <div className="loginwrapper">
        <h1 className="logintitle">SIGN IN</h1>
        <form className='loginBox' action="">
          <input type="text" placeholder='username' className="loginInput" onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder='email' className="loginInput" onChange={(e) => setPassword(e.target.value)} />
          <button className='loginButton' onClick={handleClick} >{isFetching ? <CircularProgress style={{height:12,width:12}} color='inherit'/> : "LOGIN"}</button>
          {error && <span className="errorSpan">Something went wrong...</span>}
          <a className="loginLink">DO NOT REMEMBER MY PASSWORD</a>
          <a className="loginLink">CREATE A NEW ACCOUNT</a>
        </form>
      </div>
    </div>
  )
}

export default Login