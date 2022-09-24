import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";

import { updateProfile } from "../../../store/Teachers";

import Input from "../../Input";

export default () => {
    const { profile } = useSelector((state: RootState) => state.teachers);
    const dispatch = useDispatch();

    const updateState = (fieldName: keyof typeof profile, fieldValue: string) =>
        dispatch(updateProfile({ ...profile, [fieldName]: fieldValue }));

    return (
        <div className="personal-datas-container">
            <Input labelValue="Nome completo" onChange={e => updateState("name", e.target.value)} value={profile.name} />
            <Input labelValue="Data de nascimento" onChange={e => updateState("birthdate", e.target.value)} value={profile.birthdate} />
            <Input labelValue="Número de telefone" onChange={e => updateState("phoneNumber", e.target.value)} value={profile.phoneNumber} />
            <Input labelValue="Código postal (CEP)" onChange={e => updateState("zipCode", e.target.value)} value={profile.zipCode} />
            <Input labelValue="Cadastro de pessoa física (CPF)" onChange={e => updateState("realId", e.target.value)} value={profile.realId} />
        </div>
    )
}