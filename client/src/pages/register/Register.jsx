import React from 'react'
import './register.scss'

const Register = () => {
  return (
    <div className='registerContainer'>
        <div className="registerwrapper">
            <h1 className="registertitle">CREATE AN ACCOUNT</h1>
            <form className='registerBox' action="">
                <input type="text" placeholder='name' className="registerInput" />
                <input type="text" placeholder='last name' className="registerInput" />
                <input type="text" placeholder='username' className="registerInput" />
                <input type="text" placeholder='email' className="registerInput" />
                <input type="text" placeholder='password' className="registerInput" />
                <input type="text" placeholder='confirm password' className="registerInput" />
                <span className="registerAgreement">
                By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
                </span>
                <button className='registerButton'>CREATE</button>
            </form>
        </div>
    </div>
  )
}

export default Register