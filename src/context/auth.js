import React, { useState, createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [state, setState] = useState({
        user: null,
        auth: null,
        matchs:[],
        chats:[],
    });

    return (
        <AuthContext.Provider value={[state, setState]}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };