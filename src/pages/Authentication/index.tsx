import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import IUser from '../../../core/Interfaces/Entities/IUser';

import PageTitle from "../../components/PageTitle/";
import Input from "../../components/Input/";
import Button from "../../components/Button";

const initialState: IUser = {
    username: '',
    password: '',
    email: '',
    isAdmin: false
}

export default () => {
    const [searchQuery, _] = useSearchParams();    

    const [inSignUpMode, setInSignUpMode] = useState(false);
    useEffect(() => setInSignUpMode(searchQuery.get("inSignupMode") as unknown as boolean), [searchQuery]);

    const [user, setUser] = useState(initialState);
    const updateUserState = (fieldName: keyof typeof user, value: string) => setUser({...Object.assign(user, { [fieldName]: value })});

    return (
        <article>
            <PageTitle text={inSignUpMode ? "Cadastro de usuário" : "Login de usuário"} />

            <form>
                { inSignUpMode ? 
                    <Input onChange={event => updateUserState("email", event.target.value)} value={user.password} labelValue="E-mail" /> 
                    : false 
                }

                <Input onChange={event => updateUserState("username", event.target.value)} value={user.username} labelValue="Nome de usuário" />
                <Input type="password" onChange={event => updateUserState("password", event.target.value)} value={user.password} labelValue="Senha" />
            
                <Button type="submit" className="btn-success" text="Confirmar" /> 
            </form>
        </article>
    );
}