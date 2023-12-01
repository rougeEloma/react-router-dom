import { Link } from "react-router-dom";
import Button from "../components/Button";

function Login() {
    return(
    <>
        <h1>Login</h1>
        <Button linkValue='/home' buttonValue='Se connecter'/>
    </>

    )
}

export default Login;