import { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../Firebase/FirebaseApp";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { doc, onSnapshot } from "firebase/firestore";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const loginAction = async (loginEmail, loginPassword) => {
    try {
      const result = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      toast.success(`Welcome ${result.user.email}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
      navigate("/Dashboard");
    } catch (error) {
      toast.error(`Error ${error.message}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    }
  };

  const SignUpAction = async (signupEmail, signupPassword) => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        signupEmail,
        signupPassword
      );
      toast.success(`Sign up Successful ${result.user.email}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
      navigate("/Dashboard");
    } catch (error) {
      toast.error(`Error ${error.message}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    }
  };

  useEffect(() => {
    if (user) {
      const coinRef = doc(db, "watchlist", user.uid);

      var unsubscribe = onSnapshot(coinRef, (coin) => {
        if (coin.exists()) {
          setWatchlist(coin.data().coins);
        } else {
          console.log("No Item in Watchlist");
        }
      });
      return () => {
        unsubscribe();
      };
    }
  }, [user]);

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
    <AuthContext.Provider
      value={{
        watchlist,
        user,
        loginAction,
        SignUpAction,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export const useAuth = () => {
  return useContext(AuthContext);
};
