import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider.jsx"
import { Link } from "react-router-dom"

const HomePage = () => {

    const {auth , logout} = useContext(AuthContext)

    // if (!auth) return <div>LOGING ....---</div>
    return (
    <>
        <div className="container d-flex flex-column p-3 gap-4 justify-content-center mt-5" >
            <h1 className="text-center">HOME PAGE</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro animi a, iste delectus quae quasi dignissimos numquam deserunt neque distinctio in ducimus enim repellat totam autem modi quod eaque dolor.</p>
            <div className=" d-flex gap-4 justify-content-center">
                <button className="btn btn-success" onClick={logout}>Logout</button>
                <Link  className="btn btn-success" to={"/playlist"}> Go to Playlist</Link>
            </div>
        </div>
    </>
    )
}

export {HomePage}