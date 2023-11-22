import { Routes , Route } from "react-router-dom"
import { HomePage } from "../pages/HomePage.jsx"
import { RegisterForm } from "./RegisterForm.jsx"
import { LoginForm } from "./LoginForm.jsx"

const AppRouter = () => {
    return (
        <>
        <Routes>
            <Route  path="/" element= {<HomePage/>} />
            <Route  path="/register" element = {<RegisterForm/>}/>
            <Route  path="/login" element = {<LoginForm/>}/>

        </Routes>
        </>
    )
}

export {AppRouter}