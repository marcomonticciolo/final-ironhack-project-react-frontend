import { useState, useContext } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { AuthContext } from '../context/context'

export default function Login() {

    const { storeToken,authenticateUser  } = useContext(AuthContext)

    const navigate = useNavigate()

    const [state, setState] = useState({
        username: "",
        password: ""
    })

    const updateUsername = e => setState(e.target.value)
    const updatePassword = e => setState(e.target.value)

    const updateInput = (e) => {
        setState({...state, [e.target.name]: e.target.value})
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/login`, state,{
          headers: {
            authorization: `Bearer ${localStorage.getItem("authToken")}`,
          }
        })
        .then(axiosResponse => {
            storeToken(axiosResponse.data.authToken)
            authenticateUser();
           navigate('/')
        })
        .catch(err => console.log(err))
    }
    return (
      <>
        <div className="flex min-h-full ">
          <div className="flex flex-1 flex-col justify-center py-10 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className="mx-auto w-full max-w-sm lg:w-96">
              <div>
                <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
              </div>
  
              <div className="mt-12">
                <div className="mt-6">
                  <form className="space-y-6" onSubmit={handleFormSubmit}>
                    <div>
                      <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                        Username
                      </label>
                      <div className="mt-1">
                        <input
                          id="username"
                          name="username"
                          value={state.username} 
                          onChange={updateInput}
                          type="username"
                          autoComplete="username"
                          required
                          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
  
                    <div className="space-y-1">
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                      </label>
                      <div className="mt-1">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          value={state.password} 
                          onChange={updateInput}
                          autoComplete="current-password"
                          required
                          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
  
                    <div className="flex items-center justify-between">
              {/* INPUT WHERE ERROR MESSAGES FOR SIGNING IN WILL GO  */}
                    </div>
  
                    <div>
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Sign in
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden w-0 flex-1 lg:block">
            <img
              className="inset-10 h-screen w-full object-cover"
              src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
              alt=""
            />
          </div>
        </div>
      </>
    )
  }
  