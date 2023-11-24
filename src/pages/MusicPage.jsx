import { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { AuthContext } from "../providers/AuthProvider.jsx"
import { API_URL } from "../utils/consts.js"
import { BsFillTrash3Fill , BsPencilFill   } from "react-icons/bs";
import Swal from 'sweetalert2'

const MusicPage = () => {

    const { playlistId} = useParams()
    const {auth} = useContext(AuthContext)
    const [playlist , setPlayList] = useState(null)

    const getPlayList = (playlistId) =>{
        fetch(`${API_URL}/playlist/${playlistId}`,{
            headers:{
                Authorization : auth.token
            }
        })
        .then((res) => res.json())
        .then((data) => setPlayList(data))

    }

    const handleDelete = (playlistId , musicId) =>{

        return fetch(`${API_URL}/musics/${playlistId}/${musicId}`,{
            method: "DELETE",
            headers:{
                Authorization: auth.token
            }
        })

    }

    useEffect(() => {
        getPlayList(playlistId)
    },[])

    if (!playlist){
        return(
            <div className="container-fluid d-flex flex-column justify-content-center aling-items-center mt-4">
                <h3 className="text-center mt-4">Loading_.--._.--._</h3>
            </div>
        )
    }

    return(
    <div className="container-fluid d-flex flex-column justify-content-center aling-items-center mt-4">
        
        <h1 className="text-center">{playlist.title}</h1>
        <h1 className="text-center">{playlist.author.username}</h1>
        <img className="img-fluid rounded-circle w-25" src={playlist.author.avatar}/>
        <div>
        <Link className="btn btn-success" to={`/music/${playlistId}`}>Create</Link>
        </div>
        
        <div>
            <table className="table">
            <thead>
                <tr>
                <th scope="col">Song</th>
                <th scope="col">Artis</th>
                <th scope="col">Year</th>
                <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {playlist.musics.map((music) =>{
                        return(
                            <tr key={music._id}>
                            <th scope="row">{music.name}</th>
                            <td>{music.artist}</td>
                            <td>{music.year}</td>
                            <td>
                            <button className="btn btn-outline-primary btn-sm m-1" ><BsPencilFill   /></button>
                            <Link className="btn btn-outline-danger btn-sm m-1"
                                onClick={() =>{
                                    Swal.fire({
                                        title: "Are you sure?",
                                        text: "You won't be able to revert this!",
                                        icon: "warning",
                                        showCancelButton: true,
                                        confirmButtonColor: "#3085d6",
                                        cancelButtonColor: "#d33",
                                        confirmButtonText: "Yes, delete it!"
                                        }).then((result) => {
                                        if (result.isConfirmed) {
                                            handleDelete(playlistId , music._id).then((res) => {
                                                if (res.status !== 204){
                                                    Swal.fire({
                                                        icon: "error",
                                                        title: "Que estas haciendo",
                                                        text: "Eres bruto como vas enviar un campo vacio",
                                                        footer: '<a href="#">Debes hacer un curso</a>',
                                                        timer: 1500
                                                        });
                                                } else {
                                                    Swal.fire({
                                                        title: "Deleted!",
                                                        text: "Your file has been deleted.",
                                                        icon: "success"
                                                        }); 
                                                        getPlayList(playlistId )
                                                }
                                            })
        
                                        }
                                        });
                                }
                            }
                            
                            > <BsFillTrash3Fill/></Link>
                            </td>
                            </tr>   


                        )
                    })
                }

              
            </tbody>
            </table>
        </div>

    </div>
    )


}

export {MusicPage}