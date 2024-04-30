import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";


export const TravelContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

// eslint-disable-next-line react/prop-types
const TravelProvider = ({children}) => {
    const [loading,setLoading] =useState(true);
    const [user, setUser] = useState(null)

    // Create User
    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    //sign in user
    const signInUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
     }
  // sign out user
  const LogOutUser = ()=>{
    return signOut(auth);
 }

 // sign in with google
 const logInWithGoogle = ()=>{
    setLoading(true);
   return  signInWithPopup(auth,googleProvider);
  
 }

 //sign in with github

 const logInWithGithub = ()=>{
    setLoading(true);
     return signInWithPopup(auth,githubProvider);
 }



 useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser)
        setLoading(false)
    })
    return ()=> {
        unSubscribe();
    }
},[])


    const TravelInfo = {
      createUser,
      signInUser,
      LogOutUser,
      logInWithGoogle,
      logInWithGithub,
      user,
      loading
      
    }
    return (
        <TravelContext.Provider value={TravelInfo}>
            {children}
        </TravelContext.Provider>
    );
};

export default TravelProvider;