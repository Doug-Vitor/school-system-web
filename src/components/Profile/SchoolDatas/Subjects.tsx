import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../../../store"
import { getAllAsync } from "../../../store/Subjects/promises";
import { decrementArray, incrementArray, IUpdateArrayPayload, updateArray, resetArray } from "../../../store/Teachers";

import Select, { SelectOption } from "../../Input/Select";
import DynamicActions from "../../Button/DynamicActions";
import Header from "./shared/Header";

export default () => {
    const { inEditMode, subjectsIds } = useSelector((state: RootState) => state.teachers.profile);
    const { subjects } = useSelector((state: RootState) => state.subject);

    const dispatch = useDispatch();
    useEffect(() => { if (!subjects.length) dispatch(getAllAsync()) }, [subjects]);

    const options = subjects.map((subject): SelectOption => ({
        id: subject.id,
        optionText: subject.theme
    }));

    const Actions = (props: { payload: IUpdateArrayPayload }) =>
        inEditMode ? <DynamicActions
            shouldRenderPlusIcon={subjectsIds.length <= 2}
            shouldRenderDeleteIcon={subjectsIds.length && subjectsIds[0] ? true : false}
            onPlusClick={() => dispatch(incrementArray(props.payload))}
            onDeleteClick={() => dispatch(decrementArray(props.payload))}
        /> : <></>;

    const getSubjects = (subjectId: string, index: number) => {
        const payload: IUpdateArrayPayload = { key: "subjectsIds", index }

        return (
            <div key={subjectId}>
                <Select disabled={!inEditMode} onChange={e => { dispatch(updateArray({ ...payload, value: e.target.value })) }} options={options} defaultLabel="Selecionar matéria." selectedId={subjectId} />
                {subjectId && <Actions payload={payload} />}
            </div>
        )
    }

    const defaultPayload: IUpdateArrayPayload = { index: 0, key: "subjectsIds" }
    return (
        <div>
            <Header title="Matérias" showButton={inEditMode && subjectsIds.length > 1} onDeleteClick={() => dispatch(resetArray(defaultPayload))} />
            {
                subjectsIds.length ? subjectsIds.map(getSubjects) : <Actions payload={defaultPayload} />
            }
        </div>
    );
}