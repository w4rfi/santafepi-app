import React from 'react';

const Context = React.createContext([]);

function cartContext({children}) {

    return (
        <Context.Provider value={[]}>
            {children}
        </Context.Provider>
    );
}

export default cartContext;