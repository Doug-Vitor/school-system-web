import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { RootState } from "../../../store";
import { logout } from "../../../store/Authentication";

export default () => {
    const state = useSelector((state: RootState) => state.auth);
    return state.isAuthenticated ? getAuthenticatedItems(state.authenticatedUsername) : getDefaultItems();
}

const getDefaultItems = () =>
    <ul className="navbar-authentication-items">
        <Link to="Authentication">
            Entrar
        </Link>
        <Link to="Authentication?inSignupMode=true">
            Cadastrar
        </Link>
    </ul>

const getAuthenticatedItems = (username: string) => {
    const dispatch = useDispatch();

    return (
        <ul className="navbar-authentication-items">
            <Link to="Profile" className="responsive-hide">Olá, {username}</Link>
            <span className="authenticated-divisor responsive-hide"></span>
            <Link to="Profile">
                Meu perfil
            </Link>
            <span onClick={() => dispatch(logout())}>Sair</span>
        </ul>
    )
}