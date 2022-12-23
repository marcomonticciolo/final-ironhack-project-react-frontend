import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { LockClosedIcon } from '@heroicons/react/20/solid'

export default function Signup() {

  const navigate = useNavigate()

  const [state, setState] = useState({
      email: "",
      username: "",
      password: "",
  })


  const updatePassword = e => setState(e.target.value)
  const updateUsername = e => setState(e.target.value)

  const updateInput = (e) => {
      setState({...state, [e.target.name]: e.target.value})
  }

  const handleFormSubmit = e => {
      console.log("THIS IS STATE", state)
      e.preventDefault()
      axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/signup`, state)
      .then(axiosResponse => {
         navigate('/login')
      })
      .catch(err => console.log(err))
  }
  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Create your account to get started trading!
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleFormSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={state.email} 
                  onChange={updateInput}
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email"
                />
              </div>
              <div>
                <label className="sr-only">
                  Username 
                </label>
                <input
                  id="username"
                  name="username"
                  type="username"
                  value={state.username} 
                  onChange={updateInput}
                  required
                  className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:ring-1 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm "
                  placeholder="username"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={state.password} 
                  onChange={updateInput}
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">

                {/* ERROR MESSAGES GO HERE  */}

            </div>


            <div>
              <button
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Create Account 
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
