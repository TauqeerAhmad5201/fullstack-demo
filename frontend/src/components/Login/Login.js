import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

export default function Login({setLoginUser}) {
  const [user, setUser] = useState({
    email: "", 
    password: "",    
  })
  let navigate = useNavigate()    // object for useNavigate()

  const handleChange = e => {
    const {name, value} = e.target    // name and value we are taking from input field
    console.log(name, value)            // consoling the same
    setUser({
      ...user, [name]:value           // now changing the input field name to the value fetch
    })}

    const login = (e) => {
      e.preventDefault();
      axios.post("http://localhost:9002/login", user)
      .then(res => {
        console.log(res)
        alert(res.data.message)
        setLoginUser(res.data.user)        // res always contains data as object and then user in it. // now user can be passed to prop of Login
        navigate('/')
      })
    }
  

    const navtoRegister = () => {
      navigate('/register')
   }
  return (
    <>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  value={user.email}
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  value={user.password}
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  
                  onChange={handleChange}
                />
              </div>
            </div>
          
            <div >
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"  onClick={login}
              >
                Login
              </button>
              <div>
              <button
              
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-8"
                onClick={navtoRegister}
              >
                Register
              </button>
            </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}