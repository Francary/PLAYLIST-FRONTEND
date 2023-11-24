import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { AuthContext } from "../providers/AuthProvider.jsx"


const Navbar = () => {
const {logout} = useContext(AuthContext)
    return (
<nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className={({isActive}) => {
            return isActive? "nav-link active" :"nav-link "
           }}  aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/playlist">Play List</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/playlist/new">Agregate</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/register">Register</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/login">Login</NavLink>
        </li>
      </ul>
    </div>
      <div className="d-flex" role="search">
        <button onClick={logout} className="btn btn-outline-danger btn-sm" type="submit">Logout</button>
      </div>
  </div>
</nav>
    )
}

export {Navbar}