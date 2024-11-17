import React, { createContext, useEffect, useState } from 'react';
import app from './../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();
const auth = getAuth(app)
const provider = new GoogleAuthProvider();




const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    
const createNewUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
}

useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser=>{
         setUser(currentUser)
         setLoading(false)
    })
    return () => {
        unSubscribe();

    }
},[])

const logOut = () =>{
   return signOut(auth)
}

const loginUser = (email, password)=>{
    return signInWithEmailAndPassword(auth,email,password)
    navigateToHome("/")
}

const loginWithGoogle = () =>{
    return signInWithPopup(auth, provider)
}
const updateUserProfile = (updatedData) =>{
    return updateProfile(auth.currentUser, updatedData)
}

const verifiedUser = () =>{
    return sendEmailVerification(auth.currentUser)
}

const authInfo ={
    user,
    setUser,
    createNewUser,
    logOut,
    loginUser,
    loading,
    loginWithGoogle,
    updateUserProfile,
    verifiedUser

}
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;