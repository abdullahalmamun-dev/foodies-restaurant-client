import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { useState, createContext, useEffect } from "react";
import { signOut as firebaseSignOut } from "firebase/auth"; // Import signOut

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOut = () => {
    firebaseSignOut(auth)
    .then(() => {
        console.log("User signed out successfully");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error("Error during Google sign-in:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    signInWithGoogle,
    auth,
    signOut
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
