import { createContext, useContext, useEffect, useState } from "react"
import { auth, db } from "../misc/Firebase"

const Profilecontext = createContext()  
export const  ProfileProvider = ({children}) =>{
    const [profile,setProfile] = useState(null)
    const [isLoading, setisLoading] = useState(true)
    useEffect(()=>{
        auth.onAuthStateChanged(authObj=>{
           console.log(authObj)
           
           if(authObj)
           {
               db.ref(`/profiles/${authObj.uid}`).on("value",(snap)=>{
                   const {Name, CreatedAt, Avatar} = snap.val();
                   console.log("snap", snap.val())
                   const data = {
                       Name,
                       CreatedAt,
                       Avatar,
                       uid: authObj.uid,
                       email: authObj.email
                   }
                   setProfile(data)
                   setisLoading(false)
               })
           }
           else
           {
               setProfile(null)
               setisLoading(false)
           }
         
       })
   },[]
    )
    return(
        <Profilecontext.Provider value={{profile, isLoading}}>
            {children}
        </Profilecontext.Provider>
    )
}

export const useProfile = () => useContext(Profilecontext)