import React, { createContext, useEffect, useState } from "react";

const MyContext = createContext();

const ThreadProvider = ({ children }) => {
    const [thread, setThread] = useState({});

    useEffect(() => {
        const data = localStorage.getItem("Thread");
        console.log(data);
        if (data) {
            const parseData = JSON.parse(data);
            setThread(parseData);
        }
    }, [thread]);

    return (
        <MyContext.Provider value={{ thread, setThread }}>
            {children}
        </MyContext.Provider>
    );
};

export { MyContext, ThreadProvider };
