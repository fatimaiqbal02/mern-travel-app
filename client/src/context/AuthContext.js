import {createContext, useEffect, useReducer} from 'react'

const initial_state ={
    user: localStorage.getItem('user') !== undefined ? JSON.parse(localStorage.getItem('user')) : null,
    loading: false,
    error: null,
    role: null
}

export const AuthContext = createContext(initial_state)

const AuthReducer = (state, action)=>{
    switch (action.type){
        case "LOGIN_START":
            return{
                user: null,
                loading: true,
                error: null,
                role: null
            }
        case "LOGIN_SUCCESS":
            console.log(action.payload.role)
            return{
                user: action.payload.user,
                loading: false,
                error: null,
                role: action.payload.role
            }
        case "LOGIN_FAILURE":
            return{
                user: null,
                loading: false,
                error: action.payload,
                role: null
            }
        case "REGISTER_SUCCESS":
            return{
                user: null,
                loading: false,
                error: null,
                role: null
            }    
        case "LOGOUT":
            return{
                user: null,
                loading: false,
                error: null,
                role: null
            }  
        default:
             return state
    } 
}

export const AuthContextProvider = ({children})=>{

    const [state, dispatch] = useReducer(AuthReducer, initial_state)
    useEffect(()=>{
        localStorage.setItem('user', JSON.stringify(state.user))
    },[state.user])

    return <AuthContext.Provider value={{
         user: state.user,
         loading: state.loading,
         error: state.error, 
         role: state.role,
         dispatch
    }}>
        {children}
    </AuthContext.Provider>
}