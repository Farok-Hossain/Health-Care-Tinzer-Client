import { useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState({});
  const [formData, setFormData] = useState({});

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const { email, password } = formData;

  const signInUsingEmailPassword = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((data) => {
        setUser(data);
        console.log(data);
      })
      .catch((error) => {
        setError(error);
      });
  };

  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const signInUsingGithub = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        // setUser(result.user);
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
    const unSubscribe = onAuthStateChanged(auth, (data) => {
      if (data) {
        setUser(data);
      }
    });
    return unSubscribe;
  }, []);

  return {
    user,
    error,
    setError,
    setUser,
    setFormData,
    signInUsingEmailPassword,
    signInUsingGoogle,
    signInUsingGithub,
    logOut,
  };
};

export default useFirebase;
