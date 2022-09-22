import { FormEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { loginAsync, signupAsync } from '../../store/Authentication/promises';

import IUser from '../../../core/Interfaces/Entities/Authentication/IUser';

import PageTitle from "../../components/PageTitle/";
import Input from "../../components/Input/";
import Button from "../../components/Button";

import './index.scss';
import { info } from "toastr";

const initialState: IUser = {
    username: '',
    password: '',
    email: '',
    isAdmin: false
}

export default () => {
    const [searchQuery, _] = useSearchParams();
    
    const [inSignUpMode, setInSignUpMode] = useState(false);
    useEffect(() => {
        setInSignUpMode(searchQuery.get("inSignupMode") as unknown as boolean);
        if (searchQuery.get("loginRequired")) info("Você precisa estar autenticado para prosseguir.");
    }, [searchQuery]);

    const [user, setUser] = useState(initialState);
    const updateUserState = (fieldName: keyof typeof user, value: string) => setUser({...Object.assign(user, { [fieldName]: value })});

    const dispatch = useDispatch();
    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
        dispatch(inSignUpMode ? signupAsync(user) : loginAsync(user));
    }

    return (
        <article className="authentication-container">
            <PageTitle text={inSignUpMode ? "Cadastro de usuário" : "Login de usuário"} />

            <form onSubmit={onSubmit}>
                { inSignUpMode ? 
                    <Input onChange={event => updateUserState("email", event.target.value)} value={user.email} labelValue="E-mail:" /> 
                    : false 
                }

                <Input onChange={event => updateUserState("username", event.target.value)} value={user.username} labelValue="Nome de usuário:" />
                <Input type="password" onChange={event => updateUserState("password", event.target.value)} value={user.password} labelValue="Senha:" />
            
                <Button type="submit" className="btn-success" text="Confirmar" /> 
            </form>
        </article>
    );
}