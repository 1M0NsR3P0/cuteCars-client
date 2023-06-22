import React, { createContext, useEffect, useState } from 'react';
import {
    GithubAuthProvider,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from "firebase/auth";
import app from '../../Firebase/firebase.config';
export const AuthContxt = createContext(null)


const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()



const AuthContext = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const [err,setErr] = useState('')

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const login=(email,password)=>{
        setLoading(true)
    
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleLogin =()=>{
        setLoading(true)
        signInWithPopup(auth,googleProvider)
        .then(result => {
            console.log(result.user)
        })
    }
    const githubLogin =()=>{
        setLoading(true)
        signInWithPopup(auth,githubProvider)
        .then(result => {
            console.log(result.user)
        })
    }
    const update=(name,url)=>{
        updateProfile(auth.currentUser,{
            displayName:name?name:null,
            photoURL:url?url:null,
        })
    }
    const logout = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
        setLoading(true)
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        });
        return ()=>{
            return unsubscribe()
        }
    },[])
    
    const authInfo = {
        user,
        createUser,
        login,
        logout,
        loading,
        googleLogin,
        githubLogin,
        update,
    }
    
    return (
        <AuthContxt.Provider value={authInfo}>
            {children}
        </AuthContxt.Provider>
    );
};

export default AuthContext;