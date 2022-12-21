import { useState, useEffect, createContext } from "react";
import axios from "axios";
const API_URL = "http://localhost:3000";

const AuthContext = createContext()

function AuthProviderWrapper(props){

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState(null)

    const storeToken = token => {
        localStorage.setItem('authToken', token)
    }
    const authenticateUser = () => {  

        const storedToken = localStorage.getItem('authToken');
        

        if (storedToken) {
          axios.get(
            `${API_URL}/auth/verify`, 
            { headers: { Authorization: `Bearer ${storedToken}`} }
          )
          .then((response) => {
            setIsLoggedIn(true);
            setIsLoading(false);
            setUser(response.data); 
            localStorage.setItem('thisUser', response.data)       
          })
          .catch((error) => {
            console.log("There has been an auth error:", error)
            setIsLoggedIn(false);
            setIsLoading(false);
            setUser(null);        
          });      
        } else {

            setIsLoggedIn(false);
            setIsLoading(false);
            setUser(null);      
        }   
      }
      const removeToken = () => {
        localStorage.removeItem("authToken")
      }

      const logoutUser = () => {
        removeToken()
        authenticateUser()
    }

      useEffect(() => {
        authenticateUser()
      },[])

    return (
        <AuthContext.Provider value={{
             isLoading,
             isLoggedIn,
             user, 
             storeToken,
             authenticateUser,
             logoutUser,
             }} >
            {props.children}
        </AuthContext.Provider>
    )
}

export {
    AuthContext,
    AuthProviderWrapper
}