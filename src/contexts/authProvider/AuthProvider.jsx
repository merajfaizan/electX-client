/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import app from "../../lib/firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
export const auth = getAuth(app);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   google provider
  const googleLoginProvider = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  //   create user with email and password
  const HandleCreateUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  //   log in with email and password
  const handleLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   logout method
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  //   observer function
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    googleLoginProvider,
    HandleCreateUser,
    updateUserProfile,
    handleLogin,
    logout,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
