import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../utils/consts.js";

const RegisterForm = () => {

    const ref = useRef(null)

    const navigate = useNavigate()
    const handleSubmint = async (e) => {
        e.preventDefault();

        const formData = new FormData (e.target);
        const avatar = formData.get("avatar")
        const email = formData.get("email")
        const username = formData.get("username")
        const password = formData.get("password")

        const user = {
            avatar,
            email,
            username,
            password,
        }
        const req = await fetch(`${API_URL}/auth/register`, {

            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json",
            },
    });

        if(req.status !== 201)return alert("Error al registrar Usuario")

        ref.current.reset()
        navigate('/login')

    }

    return(
        <>
        <form className="container text-bg-warning m-5 p-5 rounded-5 w-25" onSubmit={handleSubmint} ref={ref}>
            <h2>Register</h2>              
            <input className="form-control m-3" type="url" placeholder="www.my-avatar.com" name="avatar"/>
            <input className="form-control m-3" type="email" placeholder="test@gmail.com" name="email"/>
            <input className="form-control m-3" type="text" placeholder="Usuario" name="username"/>
            <input className="form-control m-3" type="password" placeholder="password" name="password"/>
            <div className="d-flex gap-5">
                <button className="btn btn-primary" type="submit">Register</button>
                <Link className="btn btn-primary" to="/login">Login</Link>
            </div>
        </form>     
        </>
    )
}

export {RegisterForm}