import { useRef } from "react";
import { useNavigate } from "react-router-dom";
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
        <h2>Register</h2>
        <form onSubmit={handleSubmint} ref={ref}>
            <input type="url" placeholder="www.my-avatar.com" name="avatar"/>
            <input type="email" placeholder="test@gmail.com" name="email"/>
            <input type="text" placeholder="Usuario" name="username"/>
            <input type="password" placeholder="password" name="password"/>
            <button>Register</button>

        </form>

       
        </>
    )
}

export {RegisterForm}