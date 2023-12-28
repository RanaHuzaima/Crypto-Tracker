import { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Firebase/FirebaseApp";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const loginAction = async (loginEmail, loginPassword) => {
    try {
      const result = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      alert(`Login Successful, Welcome ${result.user.email}`);
      navigate("/Dashboard");
    } catch (error) {
      alert(`Error ${error.message}`);
    }
  };

  const SignUpAction = async (signupEmail, signupPassword) => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        signupEmail,
        signupPassword
      );
      alert(`Sign up Successful ${result.user.email}`);
      navigate("/Dashboard");
    } catch (error) {
      alert(`Error ${error.message}`);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        navigate("/Dashboard");
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, loginAction, SignUpAction }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export const useAuth = () => {
  return useContext(AuthContext);
};
