import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const PostDetail = () => {
    const { id } = useParams()
    const [post, setPost] = useState({})

    const fetchPostByid = async () => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)

            setPost(response.data)
        } catch (e) {
            console.log(e.message)
        }
    }
    
    useEffect(() => {
        fetchPostByid()
    }, [id])

    return (
        <div>
            <h1>Бұл пост {id}</h1>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    )
}

export default PostDetail