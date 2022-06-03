import { createContext, useContext, useEffect, useState } from "react";
import axios from "../config/axios";
import { setAccessToken } from "../services/localStorage";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  // const signUp = async (input) => {
  //   const res = await axios.post("/auth/signup", input);
  //   setAccessToken(res.data.token);
  //   const resMe = await axios.get("/users/me");
  //   setUser(resMe.data.user);
  // };

  const login = async (username, password) => {
    const res = await axios.post("/auth/login", { username, password });
    setAccessToken(res.data.token);
    // const resMe = await axios.get("/users/me");
    // setUser(resMe.data.user);
  };

  // const logout = () => {
  //   removeAccessToken();
  //   setUser(null);
  // };

  return (
    <AuthContext.Provider value={{ user, login }}>
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
