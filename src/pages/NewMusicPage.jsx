import { useNavigate, useParams } from "react-router-dom"
import { API_URL } from "../utils/consts.js"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../providers/AuthProvider.jsx"
import Swal from 'sweetalert2'

const NewMusicPage = () => {
    const { playlistId} = useParams()

    const {auth} = useContext(AuthContext)
    const [playlist , setPlayList] = useState(null)
    const navigate = useNavigate()

    const handleSubmint = async (e) =>{
        e.preventDefault()

        const formData = new FormData(e.target)
        const data = {
            name : formData.get("name"),
            artist: formData.get("artist"),
            year: formData.get("year")
        }
        fetch(`${API_URL}/musics/${playlistId}`,{
            method: "POST",
            headers:{
                Authorization : auth.token,
               "Content-Type" : "application/json"
            },
            body: JSON.stringify(data)
        })
        .then((res) => {
            if(res.status !== 201) {

                return Swal.fire({
                    icon: "error",
                    title: "Que estas haciendo",
                    text: "Eres bruto como vas enviar un campo vacio",
                    timer: 1500
                  });
            }else{
                return Swal.fire({
                    icon: "success",
                    title: "success",
                    text: "Se Agrego a la Play List",
                    timer: 1500
                  }).then(()=>{
                      navigate(`/playlist/${playlistId}`)
                  })
            }
        })

    }


    const getPlayList = (playlistId) =>{
        fetch(`${API_URL}/playlist/${playlistId}`,{
            headers:{
                Authorization : auth.token
            }
        })
        .then((res) => res.json())
        .then((data) => setPlayList(data))

    }

    useEffect(() => {
        getPlayList(playlistId)
    },[])

    return (
        <div className="container-fluid d-flex flex-column justify-content-center aling-items-center mt-4">
        <h1 className="text-center">NEW MUSIC PARA LA PLAY LIST : "{playlistId}"</h1>
        <div className="container-fluid d-flex flex-column justify-content-center aling-items-center mt-4">
             <form className="container "  onSubmit={handleSubmint}>

                <div className="form-floating d-flex gap-4">
                    <input type="text" name="name" id="name" className="form-control" placeholder="Song Name"/>
                    <label  htmlFor="name">Song Name</label> 
                </div>

                <div className="form-floating d-flex gap-4">
                    <input type="text" name="artist" id="artist" className="form-control" placeholder="Artist"/>
                    <label  htmlFor="artist">Artist</label> 
                </div>
                <div className="form-floating d-flex gap-4">
                    <input type="number" name="year" id="year" className="form-control" placeholder="Year"/>
                    <label  htmlFor="artist">Year</label> 
                </div>
                <button className="btn btn-success" type="submit" >Create</button>

            </form>
         
        </div>
        </div>
    )
}

export {NewMusicPage}