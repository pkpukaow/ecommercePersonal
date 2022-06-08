import { createContext, useContext, useEffect, useState } from "react";
import axios from "../config/axios";
import { setAccessToken, removeAccessToken } from "../services/localStorage";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const getUser = async () => {
        const res = await axios.get("/auth/me");
        setUser(res.data.role);
      };
      getUser();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const signUp = async (input) => {
    const res = await axios.post("/auth/signup", input);
    setAccessToken(res.data.token);
  };

  const login = async (username, password) => {
    const res = await axios.post("/auth/login", { username, password });
    setAccessToken(res.data.token);
    setUser(res.data.role);
  };

  const logout = () => {
    removeAccessToken();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signUp, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => {
  const ctx = useContext(AuthContext);
  return ctx;
};

export default AuthContextProvider;

export { useAuth };
