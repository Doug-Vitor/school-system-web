import { Link } from "react-router-dom";

export default () =>
    <ul>
        <Link to="Authentication">
            Entrar
        </Link>
        <Link to="Authentication?inSignupMode=true">
            Cadastrar
        </Link>
    </ul>