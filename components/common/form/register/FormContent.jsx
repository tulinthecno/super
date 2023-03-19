

import Loader from '../../../common/Loader'
import { StateContext } from '../../../../context/index'
import { useRouter } from 'next/router'
import React, { useContext, useState } from 'react'
import Link from 'next/link'

const FormContent = () => {


  const [name,setName] = useState('')
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const { signUpUser , user , userInfo } = useContext(StateContext)
  const { replace } = useRouter()
  const onSubmit = async e => {
      e.preventDefault()
      setLoading(true)
      await signUpUser(email, password , name)
      // if( name === 'admin' ) {
      //     replace('/admin')
      //     }

      //     else {
      //         replace('/')
      //     }
      // replace('/admin')
      setLoading(false)
  }







  return (
    <form method="post" 
    onSubmit={e => onSubmit(e)}
    
    >
      
{loading && <Loader />}

<div className="form-group">
        <label>Name</label>
        <input
           onChange={e => setName(e.target.value)}
           value={name}
           required
        
        type="text" name="Username" placeholder="Username"  />
      </div>


      <div className="form-group">
        <label>Email Address</label>
        <input
             onChange={e => setEmail(e.target.value)}
             value={email}
        
        type="email" name="Email" placeholder="Email" required />
      </div>
      {/* name */}

      <div className="form-group">
        <label>Password</label>
        <input
             onChange={e => setPassword(e.target.value)}
             value={password}
          id="password-field"
          type="password"
          name="password"
          placeholder="Password"
        />
      </div>
      {/* password */}

      <div className="form-group">
        <button className="theme-btn btn-style-one  bg-blue-700   duration-150  transition-all  hover:bg-blue-500" type="submit">
          Register
        </button>
      </div>
      {/* login */}
    </form>
  );
};

export default FormContent;
