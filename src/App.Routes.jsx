import { Routes , Route } from "react-router-dom"
import { HomePage } from "./pages/HomePage.jsx"
import { RegisterForm } from "./components/RegisterForm.jsx"
import { LoginForm } from "./components/LoginForm.jsx"
import { Page404 } from "./pages/404Page.jsx"
import { PlayListPage } from "./pages/PlayListPage.jsx"
import { PrivateRoutes } from "./components/Private.Routes.jsx"
import { NewPlayListPage } from "./pages/NewPlayListPage.jsx"
import { MusicPage } from "./pages/MusicPage.jsx"
import { NewMusicPage } from "./pages/NewMusicPage.jsx"

const AppRouter = () => {
    return (
        <>
        <Routes>
            <Route element = {<PrivateRoutes/>} >

                <Route  path="/" element= {<HomePage/>} />
                <Route  path="/playlist" element= {<PlayListPage/>} />
                <Route  path="/playlist/new" element= {<NewPlayListPage/>} />
                <Route  path="/playlist/:playlistId" element={<MusicPage />}/>
                <Route  path="/music/:playlistId" element={<NewMusicPage />}/>

            </Route>
            <Route  path="/register" element = {<RegisterForm/>}/>
            <Route  path="/login" element = {<LoginForm/>}/>
            <Route path="*" element={<Page404/>}/>

        </Routes>
        </>
    )
}

export {AppRouter}