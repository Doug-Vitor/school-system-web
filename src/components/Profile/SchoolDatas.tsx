import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";

import { getAllAsync as getAllClassroomsAsync } from "../../store/Classrooms/promises";
import { getAllAsync as getAllSubjectsAsync } from "../../store/Subjects/promises";

import Select, { SelectOption } from "../Select";
import DynamicActions from '../Form/DynamicActions';

import IClassroom from "../../../core/Interfaces/Entities/Core/IClassroom";
import ISubject from "../../../core/Interfaces/Entities/Core/ISubject";

import './SchoolDatas.scss';
export default () => {
   const { subjects } = useSelector((state: RootState) => state.subject);
   const { classrooms } = useSelector((state: RootState) => state.classroom);

   const dispatch = useDispatch();

   const onSelectClick = (componentClicked: "classrooms" | "subjects") => {
      if (componentClicked === "subjects" && !subjects.length) dispatch(getAllSubjectsAsync());
      else if (!classrooms.length) dispatch(getAllClassroomsAsync());
   }

   return (
      <div className="school-datas-container">
         <div className="subjects">
            <div>
               <Select onClick={() => onSelectClick("subjects")} defaultLabel="Matérias" options={mapSubjectsToSelectOption(subjects)} />
               <DynamicActions onPlusClick={() => { }} onDeleteClick={() => { }} />
            </div>
         </div>

         <div className="classrooms">
            <div>
               <Select onClick={() => onSelectClick("classrooms")} defaultLabel="Sala de aulas" options={mapClassroomsToSelectOption(classrooms)} />
               <DynamicActions onPlusClick={() => { }} onDeleteClick={() => { }} />
            </div>
         </div>
      </div>
   )
}

const mapSubjectsToSelectOption = (subjects: ISubject[]) => subjects.map((subject): SelectOption => {
   return {
      id: subject.id,
      optionText: subject.theme
   }
});

const mapClassroomsToSelectOption = (classrooms: IClassroom[]) => classrooms.map((classroom): SelectOption => {
   return {
      id: classroom.id,
      optionText: classroom.room
   }
});