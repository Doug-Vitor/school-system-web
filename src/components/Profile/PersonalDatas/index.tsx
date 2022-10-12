import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";

import { updateProfile } from "../../../store/Teachers";
import { ensureIsMasked, ensureIsNotMaskedAfterDigit, maskRealId, maskZipCode, maskPhoneNumber } from "../../../helpers/masks";
import { warning } from "../../../../configs/Toastr";

import Input, { DatePicker } from "../../Input";

export default () => {
    const { profile } = useSelector((state: RootState) => state.teachers);
    const dispatch = useDispatch();

    const updateState = (fieldName: keyof typeof profile, fieldValue: string) =>
        dispatch(updateProfile({ ...profile, [fieldName]: fieldValue }));

    const showErrorMessage = (fieldName: string) => warning(`Por favor, certifique-se de preencher o campo ${fieldName} corretamente.`);
    const validateField = (fieldName: "realId" | "zipCode" | "phoneNumber") => {
        const fieldValue = profile[fieldName];

        switch (fieldName) {
            case "realId":
                if (!ensureIsMasked(fieldValue, "XXX.XXX.XXX-XX")) showErrorMessage("CPF");
                break;
            case "phoneNumber":
                if (!ensureIsMasked(fieldValue, "(00) 00000-0000")) showErrorMessage("número de telefone");
                break;
            case "zipCode":
                if (!ensureIsMasked(fieldValue, "XXXXX-XXX")) showErrorMessage("CEP");
                break;
        }
    }

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
                onChange={e => ensureIsNotMaskedAfterDigit(e.target.value, "(00) 00000-0000") && updateState("phoneNumber", maskPhoneNumber(e.target.value))}
                onBlur={() => validateField("phoneNumber")}
                value={profile.phoneNumber}
            />
            <Input
                disabled={!profile.inEditMode}
                labelValue="Código postal (CEP)"
                onChange={e => ensureIsNotMaskedAfterDigit(e.target.value, "XXXXX-XXX") && updateState("zipCode", maskZipCode(e.target.value))}
                onBlur={() => validateField("zipCode")}
                value={profile.zipCode}
            />
            <Input
                disabled={!profile.inEditMode}
                labelValue="Cadastro de pessoa física (CPF)"
                onChange={e => ensureIsNotMaskedAfterDigit(e.target.value, "XXX.XXX.XXX-XX") && updateState("realId", maskRealId(e.target.value))}
                onBlur={() => validateField("realId")}
                value={profile.realId}
            />
        </div>
    )
}