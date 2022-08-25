import { useState } from 'react'; 
import { auth } from './config.js'; 
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useAuthContext } from './useAuthContext.js';

export const useLogin = () => {
//Login Page Logic Firebase Auth
    const [error, setError] = useState(null); 
    const [success, setSuccess] = useState(null); 
    const { dispatch } = useAuthContext()

    const login  = (email, password) => {
        setError(null)
        setSuccess(null)
        signInWithEmailAndPassword(auth, email, password) 
        .then((res) => {
            dispatch({ type: 'LOGIN', payload: res.user })
            setSuccess("Login Successful")
        })
            .catch((err) => {
            setError(err.message)
        })
        
    }

    return { error, login, success }

}