import { useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GithubAuthProvider,
} from "firebase/auth";

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState({});

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider)
      .then((response) => response.json())
      .then((data) => {
        setError("");
        setUser(data);
      })
      .catch((error) => {
        setError(error);
      });
  };

  const signInUsingGithub = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        setUser(result);
        setError("");
      })
      .catch((error) => {
        setError(error);
      });
  };

  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
    return unSubscribe;
  }, []);

  return { user, signInUsingGoogle, signInUsingGithub, logOut, error };
};

export default useFirebase;
