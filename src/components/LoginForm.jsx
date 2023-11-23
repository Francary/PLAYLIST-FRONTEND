import { useRef , useContext} from "react";
import { API_URL } from "../utils/consts.js";
import { AuthContext } from "../providers/AuthProvider.jsx";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {

    const ref = useRef(null)

    const {login} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSubmint = async (e) => {
        e.preventDefault();

        const formData = new FormData (e.target);
        const email = formData.get("email")
        const password = formData.get("password")

        const user = {
            email,
            password,
        }
        const req = await fetch(`${API_URL}/auth/login`, {

        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json",
        },
});
    if(req.status !== 200) { 
        ref.current.reset()
        return alert("Error al iniciar secion")
    }
    const res = await req.json()

    login(res)

    ref.current.reset()
    navigate('/')

    }


    return(
        <>
        <form className="text-bg-warning m-5 p-5 rounded-5" onSubmit={handleSubmint} ref={ref}>
            <h2>Login</h2>
            <input className="form-control m-3" type="email" placeholder="test@gmail.com" name="email" />
            <input className="form-control m-3" type="password" placeholder="password" name="password"/>
            <button className="btn btn-primary">Login</button>

        </form>

       
        </>
    )
}

export {LoginForm}