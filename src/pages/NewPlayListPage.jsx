import { useContext, useState } from "react"
import { API_URL } from "../utils/consts.js"
import { AuthContext } from "../providers/AuthProvider.jsx"
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'

const NewPlayListPage = () => {

    const [title , setTitle] = useState('')
    const {auth} = useContext(AuthContext)

    const navigate = useNavigate()

    const handleSubmint = async (e) =>{
        e.preventDefault()

        fetch(`${API_URL}/playlist`,{
            method: "POST",
            headers:{
                Authorization : auth.token,
               "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                title
             })
        })
        .then(res => {
            if(res.status !== 201) 
                return Swal.fire({
                    icon: "error",
                    title: "Que estas haciendo",
                    text: "Eres bruto como vas enviar un campo vacio",
                    footer: '<a href="#">Debes hacer un curso</a>',
                    timer: 1500
                  });
                  setTitle('')
                  navigate('/playlist')
        })
    }
    return (
        <div className="container-fluid d-flex flex-column justify-content-center aling-items-center mt-4">
            <h1 className="text-center">NEW PLAY LIST</h1>
            <form className="container " onSubmit={handleSubmint}>
                <div className="form-floating d-flex gap-4">
                <input type="text" name="title" id="title" className="form-control" placeholder="New List"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label  htmlFor="title">Title de List</label> 
                <button className="btn btn-success">Create</button>
                </div>

            </form>
         
        </div>
    )
    
}

export {NewPlayListPage}