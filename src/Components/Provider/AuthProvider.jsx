import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateCurrentUser } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/Firebase";


export const AuthContext = createContext(null)
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [users,setUsers] = useState()
    const [loading,setLoading] = useState(true)


 const createUser = (email,password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password);
 }
 const userLogin = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password);
 }
 
    useEffect(()=> {
     const unSubscript = onAuthStateChanged(auth,currentUser => {
            setUsers(currentUser)
            setLoading(false)
        })
        return ()=>{
            unSubscript()
        }
    },[])

    const logout = () =>{
        return signOut(auth)
    }

    const googleLogin = () =>{
        return signInWithPopup(auth,provider);
    }


    const usersInfo = {
        users,
        loading,
        createUser,
        userLogin,
        logout,
        googleLogin
    }



    return (
        <AuthContext.Provider value={usersInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;