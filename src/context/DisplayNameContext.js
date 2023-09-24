import React, { createContext, useState } from "react";

const DisplayContext = createContext();

const DisplayProvider = ({ children }) => {
    const [displayName, setDisplayName] = useState({});

    return (
        <DisplayContext.Provider value={{ displayName, setDisplayName }}>
            {children}
        </DisplayContext.Provider>
    );
};

export { DisplayContext, DisplayProvider };
