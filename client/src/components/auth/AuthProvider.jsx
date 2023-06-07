import { createContext, useState, useEffect } from "react";
import { fetchMe } from "../../api/auth";

export const AuthContext = createContext();

const AuthProvder = ({ children }) => {
  const [user, setUser] = useState({ username: "Guest" });
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    async function getMe() {
      try {
        const { message, success, user } = await fetchMe();
        setUser(user);
      } catch (error) {
        setUser({ username: "Guest" });
      }
    }
    getMe();
  }, [loggedIn]);

  const contextValue = {
    user,
    setUser,
    loggedIn,
    setLoggedIn,
  };

  console.log("User from Auth Context: ", user);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvder;