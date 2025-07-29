import { Link } from "react-router-dom"

const Header = () => {

    
    return (
        <header>
            <div>
                Logo
            </div>

            <nav>
                <Link to={'/'}>Home Page</Link>
                <Link to={'/about'}>About Page</Link>
                <Link to={'/contact'}>Contact Page</Link>
                <Link to={'/posts'}>Posts Page</Link>
            </nav>
        </header>
    )
}

export default Header