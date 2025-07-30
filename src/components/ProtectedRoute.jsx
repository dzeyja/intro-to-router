import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ children, isAuth }) => {
    if (!isAuth) {
        return <Navigate to={'/login'} />
    }
    
    return children
}

export default ProtectedRoute