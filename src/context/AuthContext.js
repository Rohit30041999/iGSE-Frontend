import { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
    switch(action.type) {
        case 'LOGIN':
            return {
                customer: action.payload
            }
        case 'LOGOUT':
            return {
                customer: null
            }
        default:
            return state;
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        customer: null
    });

    useEffect(() => {
        const customer = JSON.parse(localStorage.getItem('customer'))
    
        if (customer) {
          dispatch({ type: 'LOGIN', payload: customer }) 
        }
    }, [])

    console.log('AuthContext state: ', state);

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            { children }
        </AuthContext.Provider>
    )
}