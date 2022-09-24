import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../../../store"
import { getAllAsync } from "../../../store/Subjects/promises";
import { decrementArray, incrementArray, IUpdateArrayPayload, updateArray } from "../../../store/teachers";

import Select, { SelectOption } from "../../Select";
import DynamicActions from "../../Form/DynamicActions";

export default () => {
    const { subjectsIds } = useSelector((state: RootState) => state.teachers.profile);
    const { subjects } = useSelector((state: RootState) => state.subject);

    const dispatch = useDispatch();
    useEffect(() => { if (!subjects.length) dispatch(getAllAsync()) }, [subjects]);

    const options = subjects.map((subject): SelectOption => ({
        id: subject.id,
        optionText: subject.theme
    }));

    return (
        <div>
            {subjectsIds.map((subjectIds, index) => {
                const payload: IUpdateArrayPayload = { key: "subjectsIds", index }

                return (
                    <div>
                        <Select onChange={e => { dispatch(updateArray({ ...payload, value: e.target.value })) }} options={options} defaultLabel="Selecionar matéria." selectedId={subjectIds} />
                        <DynamicActions
                            onPlusClick={() => dispatch(incrementArray(payload))}
                            onDeleteClick={() => dispatch(decrementArray(payload))}
                        />
                    </div>
                )
            })}
        </div>
    );
}