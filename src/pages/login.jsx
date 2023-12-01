import { Link } from "react-router-dom";
import Button from "../components/Button";

function Login() {
    return(
    <>
        <h1>Login</h1>
        <button><Link to='/home'>Connexion</Link></button>
        <Button linkValue='/home' buttonValue='Se connecter'/>
    </>

    )
}

export default Login;