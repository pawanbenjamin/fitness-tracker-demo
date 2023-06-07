import { createContext, useState, useEffect } from "react";
import { fetchMe } from "../../api/auth";

export const AuthContext = createContext();

const AuthProvder = ({ children }) => {
  const [user, setUser] = useState({ id: null, username: "Guest" });
  const [loggedIn, setLoggedIn] = useState(false);

  console.log("Logged in? ", loggedIn);
  useEffect(() => {
    async function getMe() {
      try {
        const { user } = await fetchMe();
        setUser(user);
        setLoggedIn(true);
      } catch (error) {
        setUser({ username: "Guest" });
        setLoggedIn(false);
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

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvder;
