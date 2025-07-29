import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const PostsPage = () => {
    const [posts, setPosts] = useState([])

    const fecthPosts = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _limit: 10
                }
            })

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
            {posts.length === 0 
                ? (
                    <h2>Loading posts...</h2>
                )
                : (
                    posts.map((post) => (
                        <Link to={`/posts/${post.id}`}>
                            <div className="post">
                                <h3>{post.title}</h3>
                                <p>{post.body}</p>
                            </div>
                        </Link>
                    ))
                )
            } 
        </div>
    )    
}

export default PostsPage