import { useEffect } from "react";

const Login = ({setActive}) => {
    useEffect(() => {
        setActive('login')
    }, [])

    return (
        <h1>Login</h1>
    )
}

export default Login;