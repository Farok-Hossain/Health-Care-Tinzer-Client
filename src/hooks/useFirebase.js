import { useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const useFirebase = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});
  const [error, setError] = useState({});

  const [userRegistration, setUserRegistration] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserRegistration({ ...userRegistration, [name]: value });
  };

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const signInUsingEmailPassword = () => {
    return signInWithEmailAndPassword(
      auth,
      userRegistration.email,
      userRegistration.password
    );
  };

  const createUsingEmailPassword = () => {
    return createUserWithEmailAndPassword(
      auth,
      userRegistration.email,
      userRegistration.password
    );
  };

  const signInUsingGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider).finally(() =>
      setIsLoading(false)
    );
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
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    });
    return unSubscribe;
  }, []);

  return {
    user,
    error,
    isLoading,
    setError,
    setUser,
    handleInput,
    createUsingEmailPassword,
    signInUsingEmailPassword,
    signInUsingGoogle,
    signInUsingGithub,
    logOut,
  };
};

export default useFirebase;
