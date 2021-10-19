// import { useContext } from "react";
// import { AuthContext } from "../Context/AuthProvider";

import { useContext } from "react"
import { Authcontext } from "../Context/AuthProvider"


// const useAuth = () => {
//     return useContext(AuthContext)
// }

// export default useAuth;

const useAuth = () => {
    return useContext(Authcontext)
}

export default useAuth;