import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../../../store"
import { getAllAsync } from "../../../store/Classrooms/promises";
import { decrementArray, incrementArray, IUpdateArrayPayload, updateArray } from "../../../store/Teachers";

import Select, { SelectOption } from "../../Select";
import DynamicActions from "../../Button/DynamicActions";

export default () => {
    const { inEditMode, classroomsIds } = useSelector((state: RootState) => state.teachers.profile);
    const { classrooms } = useSelector((state: RootState) => state.classroom);

    const dispatch = useDispatch();
    useEffect(() => { if (!classrooms.length) dispatch(getAllAsync()) }, [classrooms]);

    const options = classrooms.map((classroom): SelectOption => ({
        id: classroom.id,
        optionText: classroom.room
    }));

    return (
        <div>
            {classroomsIds.map((classroomId, index) => {
                const payload: IUpdateArrayPayload = { key: 'classroomsIds', index }

                return (
                    <div key={classroomId}>
                        <Select disabled={!inEditMode} onChange={e => dispatch(updateArray({ ...payload, value: e.target.value }))} options={options} defaultLabel="Selecionar sala de aula." selectedId={classroomId} />
                        {
                            inEditMode ?
                                <DynamicActions
                                    onPlusClick={() => dispatch(incrementArray(payload))}
                                    onDeleteClick={() => dispatch(decrementArray(payload))}
                                /> : false
                        }
                    </div>
                )
            })}
        </div>
    );
}