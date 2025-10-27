"use client"
import {signIn} from "next-auth/react"
import Navbar from "../navbar/page"


function home(){
    return(
       <div>
        <Navbar/>
        <button onClick ={()=>signIn("google")}>sign in with google</button>
       </div>
    )
}

export default home