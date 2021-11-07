import React, { useState, useEffect } from 'react';
import DataContext from './DataContext';

function DataProvider({ children }) {
  
    const [params, setParams] = useState({})

    const contextValue = {
        params,
        setParams
    };

    return (
        <DataContext.Provider
        value={ { ...contextValue } }
        >
            {children}
        </DataContext.Provider>
    );
}

export default DataProvider;