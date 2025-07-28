import { useNavigate } from "react-router-dom"

const AboutPage = () => {
    const navigate = useNavigate()

    const clickFunc = () => {
        console.log('Hello njdnfpk')
        alert('About Page')

        navigate('/')
    }

    return (
        <>
            <h1>About Page</h1>
            <button onClick={clickFunc}>Click Me!</button>
        </>
    )
}

export default AboutPage