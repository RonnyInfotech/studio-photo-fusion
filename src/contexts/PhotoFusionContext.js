import React, { createContext, useState } from 'react'

export const PhotoFusionContext = createContext(null);
const PhotoFusionContextProvider = (props) => {
    const [first, setfirst] = useState(true);
    
    return (
        <PhotoFusionContext.Provider
            value={{
                first,
                setfirst
            }}>
            {props.children}
        </PhotoFusionContext.Provider>
    )
}

export default PhotoFusionContextProvider;