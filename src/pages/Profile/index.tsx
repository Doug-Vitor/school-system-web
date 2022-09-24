import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { info } from "toastr";

import PageTitle from "../../components/PageTitle";
import PersonalDatas from "../../components/Profile/PersonalDatas";
import SchoolDatas from "../../components/Profile/SchoolDatas";
import Button from "../../components/Button";

import './index.scss';
export default () => {
    const [searchQuery, _] = useSearchParams();

    useEffect(() => {
        if (searchQuery.get("shouldCreateProfile")) info("Você precisa criar o seu perfil para usar as funcionalidades do sistema.");
    }, [searchQuery]);

    return (
        <article className="profile-container">
            <PageTitle text="Meu perfil" />

            <form>
                <div className="form-container">
                    <PersonalDatas />
                    <SchoolDatas />
                </div>

                <Button type="submit" className="btn-success" text="Salvar informações" />
            </form>
        </article >
    );
}