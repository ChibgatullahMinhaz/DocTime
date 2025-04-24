import React, { useState } from 'react';
import { LoaderContext } from '../CreatedContaxt/CreatedContaxt';

const LoaderProvider = ({children}) => {

  const [loader, setLoader] = useState(false);
    return (
        <LoaderContext.Provider value={{loader , setLoader}}>
            {children}
        </LoaderContext.Provider>
    );
};

export default LoaderProvider;