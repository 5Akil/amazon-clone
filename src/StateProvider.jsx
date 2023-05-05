import React, { createContext, useContext, useReducer} from 'react'

// This is DATA LAYER
export const StateContext = createContext();

//BUILD A PROVIDER
export const StateProvider = ({reducer, initialState, children}) =>(
     /*use reducer hook is hear */
    <StateContext.Provider value={useReducer(reducer, initialState)}>  
    {/*HERe children refers to all child components that we wrap inside at index.js */}
        {children}
    </StateContext.Provider>
)

//This is how we use contaxt in components
export const useStateValue = ()=>useContext(StateContext); 





