import { FormEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { loginAsync, signupAsync } from '../../store/Authentication/promises';
import { info } from "toastr";

import IUser from '../../../core/Interfaces/Entities/Authentication/IUser';

import Input from "../../components/Input/";
import Button from "../../components/Button";

import updateState from '../../helpers/state';
import Form from "../../components/Form";

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

    const dispatch = useDispatch();
    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
        dispatch(inSignUpMode ? signupAsync(user) : loginAsync(user));
    }

    return (
        <Form title={inSignUpMode ? "Cadastro de usuário" : "Login de usuário"} onSubmit={onSubmit}>
            {inSignUpMode &&
                <Input onChange={event => updateState(user, "email", event.target.value, setUser)} value={user.email} labelValue="E-mail:" />
            }

            <Input onChange={event => updateState(user, "username", event.target.value, setUser)} value={user.username} labelValue="Nome de usuário:" />
            <Input type="password" onChange={event => updateState(user, "password", event.target.value, setUser)} value={user.password} labelValue="Senha:" />

            <Button type="submit" className="success" text="Confirmar" />
        </Form>
    );
}