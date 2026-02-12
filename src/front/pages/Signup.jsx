import React, { useState } from 'react'


const Signup = () => {

const [email, SetEmail] = useState("")
const [password, SetPassword] = useState("")
const [username, SetUsername] = useState("")


const handleSubmit = async (e) => {
  e.preventDefault()

  try {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
  } catch (error) {
    
  }

}


  return (
    <div className='container'>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="inputEmail3" value={email} onChange={(e)=>SetEmail(e.target.value)} />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input type="password" className="form-control" id="inputPassword3" value={password} onChange={(e)=>SetPassword(e.target.value)} />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputusername" className="col-sm-2 col-form-label">Username</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputusername" value={username} onChange={(e)=>SetUsername(e.target.value)} />
          </div>
        </div>


        <button type='submit' className='btn btn-primary'>Sign in</button>
      </form>
    </div>
  );

}

export default Signup

