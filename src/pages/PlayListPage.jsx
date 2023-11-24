import { PlayItem } from "../components/PlayItem"
import { useState , useEffect, useContext } from "react"
import { AuthContext } from "../providers/AuthProvider.jsx"
import { API_URL } from "../utils/consts.js"
import { Link } from "react-router-dom"

const PlayListPage = () => {

    const [ playList , setPlayList ] = useState([])

    const [filtered , setFiltered ] = useState([])
    const [search , setShearch] = useState("")


    const { auth } = useContext(AuthContext)
    const getAllPlayList = () =>{
        fetch(`${API_URL}/playlist`,{
            headers:{
                Authorization : auth.token
            }
        })
        .then((res) => res.json())
        .then((data) => setPlayList(data))

    }
    useEffect (()=>{
        getAllPlayList()
    },[])

    useEffect (()=>{
        const filtereds = playList.filter((play)=>{
            return play.title.toLowerCase().includes(search.toLowerCase().trim())
        })
        setFiltered(filtereds)
    },[playList,search])



    return (
        <div className="container d-flex flex-column p-3 gap-4 justify-content-center mt-5">  
            <h1 className="text-center">PlayListPage </h1>
            <div className="d-flex flex-row gap-4">
                <Link className="btn btn-success" to="/playlist/new">Create</Link>
                <input type="search" name="" id="" placeholder="Search" className="form-control" 
                onChange={ (e) => setShearch(e.target.value)}
                value={search} />
            </div>
            <div className="w-100 d-flex flex-column gap-4">
                {filtered.map((play) => {
                        return (
                        <PlayItem
                            key={play._id}
                            playlistId={play._id}
                            title={play.title}
                            username={play.author.username}
                            avatar={play.author.avatar}
                            musics={play.musics}
                            refresh= {getAllPlayList}
                            />
                            
                            )
                    })}
              </div>
        </div>      
    )
}

export {PlayListPage}