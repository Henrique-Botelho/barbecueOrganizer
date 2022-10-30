import React, { createContext } from "react";

export const MainContext = createContext();

export default function AuthProvider({children}){
    
    return(
        <MainContext.Provider>
            {children}
        </MainContext.Provider>
    );
}