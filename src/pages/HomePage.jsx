import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider.jsx"
import { Link } from "react-router-dom"

const HomePage = () => {

    const {auth , logout} = useContext(AuthContext)

    // if (!auth) return <div>LOGING ....---</div>
    return (
        <>
        <div className="container-fluid d-f p-3 ">
        <h1>HOME PAGE</h1>
        <p className="w-75">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro animi a, iste delectus quae quasi dignissimos numquam deserunt neque distinctio in ducimus enim repellat totam autem modi quod eaque dolor.</p>
        <Link  className="btn btn-success" to={"/playlist"}> Go to Playlist</Link>
        <button className="btn btn-success" onClick={logout}>Logout</button>
        </div>
        </>
    )
}

export {HomePage}