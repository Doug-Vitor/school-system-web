import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";

import { updateProfile } from "../../../store/Teachers";
import { ensureIsNotMasked, maskRealId, maskZipCode, maskPhoneNumber } from "../../../helpers/masks";

import Input, { DatePicker } from "../../Input";

export default () => {
    const { profile } = useSelector((state: RootState) => state.teachers);
    const dispatch = useDispatch();

    const updateState = (fieldName: keyof typeof profile, fieldValue: string) =>
        dispatch(updateProfile({ ...profile, [fieldName]: fieldValue }));

    return (
        <div className="w-[100%] md:w-[33%]">
            <Input
                disabled={!profile.inEditMode}
                labelValue="Nome completo"
                onChange={e => updateState("name", e.target.value)}
                value={profile.name}
            />
            <DatePicker disabled={!profile.inEditMode} labelValue="Data de nascimento" onChange={e => updateState("birthdate", e.toString())} value={profile.birthdate} />
            <Input
                disabled={!profile.inEditMode}
                labelValue="Número de telefone"
                onChange={e => ensureIsNotMasked(e.target.value, "(00) 00000-0000") && updateState("phoneNumber", maskPhoneNumber(e.target.value))}
                value={profile.phoneNumber}
            />
            <Input
                disabled={!profile.inEditMode}
                labelValue="Código postal (CEP)"
                onChange={e => ensureIsNotMasked(e.target.value, "XXXXX-XXX") && updateState("zipCode", maskZipCode(e.target.value))}
                value={profile.zipCode}
            />
            <Input
                disabled={!profile.inEditMode}
                labelValue="Cadastro de pessoa física (CPF)"
                onChange={e => ensureIsNotMasked(e.target.value, "XXX.XXX.XXX-XX") && updateState("realId", maskRealId(e.target.value))}
                value={profile.realId}
            />
        </div>
    )
}