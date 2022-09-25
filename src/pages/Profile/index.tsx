import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { getAuthenticatedProfileAsync, saveProfileAsync } from "../../store/Teachers/promises";

import { FormEvent, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { info } from "toastr";

import PageTitle from "../../components/PageTitle";
import PersonalDatas from "../../components/Profile/PersonalDatas";
import SchoolDatas from "../../components/Profile/SchoolDatas";
import Button from "../../components/Button";

import './index.scss';
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
    }, [ownsTeacherProfile])

    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
        dispatch(saveProfileAsync(profile))
    };

    return (
        <article className="profile-container">
            <PageTitle text="Meu perfil" />

            <form onSubmit={onSubmit}>
                <div className="form-container">
                    <PersonalDatas />
                    <SchoolDatas />
                </div>

                <Button type="submit" className="btn-success" text="Salvar informações" />
            </form>
        </article >
    );
}