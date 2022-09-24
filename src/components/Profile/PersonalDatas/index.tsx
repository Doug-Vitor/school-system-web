import { useSelector, useDispatch } from "react-redux";
import showMessage from "../../../../services/ToastrServices";
import { RootState } from "../../../store";

import { updateProfile } from "../../../store/Teachers";

import Input from "../../Input";

export default () => {
    const { profile } = useSelector((state: RootState) => state.teachers);
    const dispatch = useDispatch();

    const updateState = (fieldName: keyof typeof profile, fieldValue: string) =>
        dispatch(updateProfile({ ...profile, [fieldName]: fieldValue }));

    const updatePhoneNumber = (phoneNumber: string) => {
        if (ensureIsNotMasked(phoneNumber, "(00) 00000-0000")) {
            const maskPhoneNumber = (_: string, area: string, prefix: string, sufix: string) => `(${area}) ${prefix}-${sufix}`
            updateState("phoneNumber", phoneNumber.replace(/(\d{2})(\d{5})(\d{4})/, maskPhoneNumber));
        }
    }

    const updateZipCode = (zipCode: string) => {
        if (ensureIsNotMasked(zipCode, "XXXXX-XXX")) {
            const maskedZipCode = zipCode.replace(/(\d{5})(\d{3})/, (_: string, prefix: string, sufix: string) => prefix + '-' + sufix);
            updateState("zipCode", maskedZipCode);
        }
    }

    const updateRealId = (realId: string) => {
        if (ensureIsNotMasked(realId, "XXX.XXX.XXX-XX")) {
            const getMaskedRealId = (_: string, first: string, second: string, third: string, last: string) =>
                `${first}.${second}.${third}-${last}`

            const maskedRealId = realId.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, getMaskedRealId);
            updateState("realId", maskedRealId);
        }
    }

    return (
        <div className="personal-datas-container">
            <Input labelValue="Nome completo" onChange={e => updateState("name", e.target.value)} value={profile.name} />
            <Input labelValue="Data de nascimento" onChange={e => updateState("birthdate", e.target.value)} value={profile.birthdate} />
            <Input labelValue="Número de telefone" onChange={e => updatePhoneNumber(e.target.value)} value={profile.phoneNumber} />
            <Input labelValue="Código postal (CEP)" onChange={e => updateZipCode(e.target.value)} value={profile.zipCode} />
            <Input labelValue="Cadastro de pessoa física (CPF)" onChange={e => updateRealId(e.target.value)} value={profile.realId} />
        </div>
    )
}

const ensureIsNotMasked = (masked: string, baseMask: string) => masked.substring(0, masked.length-1).length !== baseMask.length;