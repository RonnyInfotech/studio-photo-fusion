import React, { createContext, useState } from 'react'

export const PhotoFusionContext = createContext(null);
const PhotoFusionContextProvider = (props) => {
    const [first, setfirst] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);

    return (
        <PhotoFusionContext.Provider
            value={{
                first,
                setfirst,
                isAdmin,
                setIsAdmin
            }}>
            {props.children}
        </PhotoFusionContext.Provider>
    )
}

export default PhotoFusionContextProvider;