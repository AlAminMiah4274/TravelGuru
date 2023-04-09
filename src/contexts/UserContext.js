import React, { createContext } from 'react';

export const AuthContext = createContext();

const UserContext = ({ children }) => {

    const info = {};
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;