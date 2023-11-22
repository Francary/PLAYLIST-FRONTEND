import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider.jsx"

const HomePage = () => {

    const {auth , logout} = useContext(AuthContext)

    // if (!auth) return <div>LOGING ....---</div>
    return (
        <>
        <p>HOME PAGE</p>
        {/* <p>{auth?.user?.email}</p>
        <p>{auth?.user?.password}</p>
        <p>{auth?.user?.avatar}</p> */}
        <button onClick={logout}>Logout</button>
        </>
    )
}

export {HomePage}