import Link from "next/link";
import Loader from '../../../common/Loader'
import { StateContext } from '../../../../context/index'

import { useRouter } from 'next/router'
import React, { useContext, useState } from 'react'



const FormContent = () => {

  const [name,setName] = useState('')
        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")
        const [loading, setLoading] = useState(false)
        const { signInUser , user } = useContext(StateContext)
        const { replace } = useRouter()
        const onSubmit = async e => {
            e.preventDefault()
            setLoading(true)
            await signInUser(email, password , name )


            // if( name === 'admin' ) {
            // replace('/admin')
            // }

            // else {
            //     replace('/')
            // }
            setLoading(false)
        }
    











  return (
    <div className="form-inner">
      {loading && <Loader />}
      <h3>Login to Superio</h3>

      {/* <!--Login Form--> */}
      <form
       onSubmit={e => onSubmit(e)}
      method="post">
        <div className="form-group">
          <label>Username</label>
          <input
                onChange={e => setEmail(e.target.value)}
                value={email}
          
          type="email" name="email" placeholder="email" required />
        </div>
        {/* name */}

        <div className="form-group">
          <label>Password</label>
          <input
            onChange={e => setPassword(e.target.value)}
            value={password}
          
          type="password" name="password" placeholder="Password" />
        </div>
        {/* password */}

        <div className="form-group">
          <div className="field-outer">
            <div className="input-group checkboxes square">
              <input type="checkbox" name="remember-me" id="remember" />
              <label htmlFor="remember" className="remember">
                <span className="custom-checkbox"></span> Remember me
              </label>
            </div>
            <a href="#" className="pwd">
              Forgot password?
            </a>
          </div>
        </div>
        {/* forgot password */}

        <div className="form-group">
          <button
            className="theme-btn btn-style-one"
            type="submit"
            name="log-in"
          >
            Log In
          </button>
        </div>
        {/* login */}
      </form>
      {/* End form */}

      <div className="bottom-box">
        <div className="text">
          Don&apos;t have an account?{" "}
          <Link
            href="#"
            className="call-modal signup"
            data-bs-dismiss="modal"
            data-bs-target="#registerModal"
            data-bs-toggle="modal"
          >
            Signup
          </Link>
        </div>

        {/* <div className="divider">
          <span>or</span>
        </div>

        <LoginWithSocial /> */}



      </div>
      {/* End bottom-box LoginWithSocial */}
    </div>
  );
};

export default FormContent;
