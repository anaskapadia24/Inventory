import { createContext, useContext, useEffect, useState } from "react"
import { auth } from "../misc/Firebase"

const Profilecontext = createContext()  
const [Profile,setProfile] = useState(null)
useEffect(()=> {
    auth.onAuthStateChanged
}

)
export const  ProfileProvider = ({children}) =>{
    return(
        <Profilecontext.Provider>
            {children}
        </Profilecontext.Provider>
    )
}

export const useProfile = () => useContext(Profilecontext)