"use client"
import {signIn,signOut,useSession} from "next-auth/react"
import Navbar from "../navbar/page"
import Image from "next/image";



function home(){
    const {data:session} =useSession()
    if(session){
        return(
//  google integration for logout code
            <>
            <Image src={session.user?.image || "mero-profile.png"} alt="profile picture" width={80} height={80} /> 
        <h1>Welcome,{session.user?.name}</h1> 
        <h3>{session.user?.email}</h3>
        <button onClick={()=>signOut()}>Sign Out</button>
        </>
        )
    }
    return(
        // google integration for login
       <div>
        <h1>Not Logged In</h1>
        <button onClick ={()=>signIn("google")}>sign in with google</button>
       </div>
       
    )
}

export default home