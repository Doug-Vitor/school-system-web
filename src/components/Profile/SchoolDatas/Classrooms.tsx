import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../../../store"
import { getAllAsync } from "../../../store/Classrooms/promises";
import { decrementArray, incrementArray, IUpdateArrayPayload, updateArray, resetArray } from "../../../store/Teachers";

import Select, { SelectOption } from "../../Input/Select";
import DynamicActions from "../../Button/DynamicActions";
import Header from "./shared/Header";

export default () => {
    const { inEditMode, classroomsIds } = useSelector((state: RootState) => state.teachers.profile);
    const { classrooms } = useSelector((state: RootState) => state.classroom);

    const dispatch = useDispatch();
    useEffect(() => { if (!classrooms.length) dispatch(getAllAsync()) }, [classrooms]);

    const options = classrooms.map((classroom): SelectOption => ({
        id: classroom.id,
        optionText: classroom.room
    }));


    const Actions = (props: { payload: IUpdateArrayPayload }) =>
        inEditMode ?
            <DynamicActions
                shouldRenderPlusIcon={classroomsIds.length <= 2}
                shouldRenderDeleteIcon={classroomsIds.length && classroomsIds[0] ? true : false}
                onPlusClick={() => dispatch(incrementArray(props.payload))}
                onDeleteClick={() => dispatch(decrementArray(props.payload))}
            /> : <></>;

    const getClassrooms = (classroomId: string, index: number) => {
        const payload: IUpdateArrayPayload = { key: 'classroomsIds', index }

        return (
            <div key={classroomId}>
                <Select disabled={!inEditMode} onChange={e => dispatch(updateArray({ ...payload, value: e.target.value }))} options={options} defaultLabel="Selecionar sala de aula." selectedId={classroomId} />
                {classroomId && <Actions payload={payload} />}
            </div>
        );
    }

    const defaultPayload: IUpdateArrayPayload = { index: 0, key: "classroomsIds" }
    return (
        <div>
            <Header title="Salas de aulas" showButton={inEditMode && classroomsIds.length > 1} onDeleteClick={() => dispatch(resetArray(defaultPayload))} />
            {
                classroomsIds.length ? classroomsIds.map(getClassrooms)
                    : <Actions payload={defaultPayload} />
            }
        </div>
    )
}