import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [userLoading, setUserLoading] = useState(true)

    const createUser = (email, password) =>{
        setUserLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) =>{
        setUserLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (updatedData) =>{
        setUserLoading(true)
        return updateProfile(auth.currentUser, updatedData);
    }

    const googleSignIn = () =>{
        setUserLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    const passwordReset = (email) =>{
        return sendPasswordResetEmail(auth, email)
    }

    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setUserLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    })

    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        logIn,
        userLoading,
        setUserLoading,
        googleSignIn,
        updateUser,
        passwordReset
    }
    return (
        <AuthContext value={authData}>{children}</AuthContext>
    );
};

export default AuthProvider;