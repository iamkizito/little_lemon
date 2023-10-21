import { useEffect } from "react";

const Login = ({setActive}) => {
    useEffect(() => {
        setActive('login')
    }, [])

    return (
        <div id="login" data-testid="login_component">
            <h1>Login</h1>
        </div>
        
    )
}

export default Login;