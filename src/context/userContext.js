import React, { createContext, useEffect, useState } from "react";

const MyContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ user: null });

  useEffect(() => {
    const data = localStorage.getItem("userData");
    console.log(data);
    if (data) {
      const parseData = JSON.parse(data);
      setUser({
        ...user,
        user: parseData,
      });
    }
  }, []);

  return (
    <MyContext.Provider value={{ user, setUser }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, UserProvider };
