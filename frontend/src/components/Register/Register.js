import React from 'react'
import './Register.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

export default function Register() {
  
    const [user, setUser] = useState({
      name: "", 
      email: "", 
      password: "", 
      reEnterPassword: ""
    })
   
    const handleChange = e => {
      const {name, value} = e.target    // name and value we are taking from input field //name also indicates the current form field we're using
      console.log(name, value)   
      console.log({[name]:value})         // consoling the same
      setUser({
        ...user, [name] : value          // now changing the input field name to the value fetch so to update the setState
      })

    }
    const register = (e) => {
      e.preventDefault();
      const {name, email, password, reEnterPassword} = user
      if( name && password && email && (password === reEnterPassword)){
        alert('posted')
           axios.post("http://localhost:9002/register", user)
           .then(res => console.log(res))
      }  
      else  {
        alert('Invalid')
      }
    }
    let navigate = useNavigate()

    const navtoLogin = () => {
      navigate('/login')
   }
  return (
    <>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register for new account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
          <div>
              <label htmlFor="fname" className="block text-sm font-medium leading-6 text-gray-900">
                Full Name
              </label>
              {/* {console.log("user", user)} */}
              <div className="mt-2">
                <input
                  id="fname"
                  name="name"
                  value={user.name}
                  type="text"
                  placeholder="Your name"
                  autoComplete="fname"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                />
              </div>
            </div>
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
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
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
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Retype your password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="reEnterPassword"
                  value={user.reEnterPassword}
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={register}
              >
                Register
              </button>
            </div>
            <div className='center-div'>or</div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={navtoLogin}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
