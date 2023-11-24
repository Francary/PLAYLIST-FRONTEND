import { BsMusicNoteList , BsFillTrash3Fill } from "react-icons/bs";
import Swal from 'sweetalert2'
import { API_URL } from "../utils/consts.js";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider.jsx";
import { Link } from "react-router-dom";

const PlayItem = ({playlistId, title,avatar, username , musics , refresh}) => {

    const {auth} = useContext(AuthContext)
    const handleDelete = async (playlistId) =>{
    return  await fetch(`${API_URL}/playlist/${playlistId}`,{
            method:"DELETE",
            headers: {
                Authorization: auth.token
            }
        })
            
            
        

    }

    return (
        <div className="card mb-3">
        <div className="row g-0">
            <div className="col-md-4">
                <img src={avatar} className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-7">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{username}</p>
                <p className="card-text"><small className="text-body-secondary">{musics.length} musics</small></p>
            </div>
            </div>
            <div className="col-md-1">
                <Link className="btn btn-outline-primary btn-sm m-1" to={`/playlist/${playlistId}`}><BsMusicNoteList  /></Link>
                <button className="btn btn-outline-danger btn-sm"
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
                                    handleDelete(playlistId).then((res) => {
                                        if (res.status !== 200){
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
                                              refresh()
                                        }
                                    })

                                }
                              });
                        }
                    }
                ><BsFillTrash3Fill /></button>
                
            </div>
        </div>
    </div>
    )
}

export {PlayItem}