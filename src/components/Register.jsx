import { useEffect } from "react";

const Register = ({setActive}) => {
    useEffect(() => {
        setActive('register')
    }, [])

    return (
        <div id="register" data-testid="register_component">
            <h1>Register</h1>
        </div>
        
    )
}

export default Register;