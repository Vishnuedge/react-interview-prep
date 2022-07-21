import { createContext , useState} from "react";
export const Context = createContext();

const initialState = {
    name : 'Vishnu'
}

const Store = ({ children }) => {
    const [ value, setValue ] = useState(initialState)
    return <Context.Provider value={[ value, setValue ]} >{children}</Context.Provider>
}

export default Store;