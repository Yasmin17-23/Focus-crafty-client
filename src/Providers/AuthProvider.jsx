import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config"

const auth = getAuth(app);
export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [dataLoading, setDataLoading] = useState(true);

    const createUser = (email, password) => {
        setDataLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setDataLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    const googleLogin = () => {
        setDataLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const githubLogin = () => {
        setDataLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    const logOut = () => {
        setUser(null);
        setDataLoading(true);
        return signOut(auth);
    }
    useEffect(() => {
       const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if(currentUser){
                setUser(currentUser);
                setDataLoading(false);
            }
        });

        return () => {
           unSubscribe();
        }
    }, [])
    
    const allInfos = {
        user, 
        dataLoading,
        createUser,
        signInUser,
        googleLogin,
        githubLogin,
        logOut
    }
    
    return (
        <AuthContext.Provider value={allInfos}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;