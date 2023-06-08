import { createContext, useState, useEffect } from "react";
import { fetchMyRoutines } from "../../api/routines";
import useAuth from "../../hooks/useAuth";
export const RoutinesContext = createContext();

export default function RoutinesProvider({ children }) {
  const [myRoutines, setMyRoutines] = useState([]);
  const { loggedIn } = useAuth();

  useEffect(() => {
    async function getMyRoutines() {
      const { data } = await fetchMyRoutines();
      setMyRoutines(data);
    }
    getMyRoutines();
  }, [loggedIn]);

  const contextValue = {
    myRoutines,
    setMyRoutines
  };
  return (
    <RoutinesContext.Provider value={contextValue}>
      {children}
    </RoutinesContext.Provider>
  );
}
