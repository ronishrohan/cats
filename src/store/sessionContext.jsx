import { createContext, useState } from "react";

export const SessionContext = createContext();

export function SessionProvider({ children }) {
  const [user, setUser] = useState(null);
  function updateUser(data){
    setUser(data);
  }
  return (<SessionContext.Provider value={{user, updateUser}} >{children}</SessionContext.Provider>);
}
