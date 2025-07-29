import axios from "axios"
import { useEffect, useState } from "react"

const PostsPage = () => {
    const [posts, setPosts] = useState([])

    const fecthPosts = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')

            setPosts(response.data)
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        fecthPosts()
    }, [])
    
    return (
        <div>
            {posts.map((post) => (
                <h3>{post.title}</h3>
            ))} 
        </div>
    )    
}

export default PostsPage