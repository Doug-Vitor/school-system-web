import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";

import { updateProfile } from "../../store/Teachers";
import { getAuthenticatedProfileAsync, saveProfileAsync } from "../../store/Teachers/promises";

import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { info } from "toastr";

import { flex } from "../../styles";
import PersonalDatas from "../../components/Profile/PersonalDatas";
import SchoolDatas from "../../components/Profile/SchoolDatas";
import Button from "../../components/Button";
import Form from "../../components/Form";

export default () => {
    const { ownsTeacherProfile } = useSelector((state: RootState) => state.auth);
    const { profile } = useSelector((state: RootState) => state.teachers);

    const [searchQuery, _] = useSearchParams();
    useEffect(() => {
        if (searchQuery.get("shouldCreateProfile")) info("Você precisa criar o seu perfil para usar as funcionalidades do sistema.");
    }, [searchQuery]);

    const dispatch = useDispatch();
    useEffect(() => {
        if (ownsTeacherProfile) dispatch(getAuthenticatedProfileAsync())
    }, [ownsTeacherProfile]);

    const onSubmit = (event: React.MouseEvent) => {
        event.preventDefault();
        dispatch(saveProfileAsync(profile));
    }

    return (
        <Form onSubmit={event => event.preventDefault()} title="Meu perfil" className="px-[2vw]" size="large">
            <div className={`${flex} justify-evenly`}>
                <PersonalDatas />
                <SchoolDatas />
            </div>

            {profile.inEditMode ?
                <Button type="submit" className="success" text="Salvar informações" onClick={onSubmit} />
                : <Button type="button" className="info" onClick={() => dispatch(updateProfile({ ...profile, inEditMode: true }))} text="Editar perfil" />
            }
        </Form>
    );
}