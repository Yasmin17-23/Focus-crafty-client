import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config"

const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
       const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if(currentUser){
                setUser(currentUser);
            }
        });

        return () => {
           unSubscribe();
        }
    }, [])
    
    const allInfos = {
        user, 
        createUser,
        signInUser
    }
    return (
        <AuthContext.Provider value={allInfos}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;