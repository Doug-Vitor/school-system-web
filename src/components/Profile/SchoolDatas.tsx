import { RootState } from "../../store";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getAllAsync as getAllClassroomsAsync } from "../../store/Classrooms/promises";
import { getAllAsync as getAllSubjectsAsync } from "../../store/Subjects/promises";

import Select, { SelectOption } from "../Select";
import DynamicActions from '../Form/DynamicActions';

import IClassroom from "../../../core/Interfaces/Entities/Core/IClassroom";
import ISubject from "../../../core/Interfaces/Entities/Core/ISubject";

import './SchoolDatas.scss';
export default () => {
   const { profile } = useSelector((state: RootState) => state.teachers);
   const { subjects } = useSelector((state: RootState) => state.subject);
   const { classrooms } = useSelector((state: RootState) => state.classroom);

   const dispatch = useDispatch();
   useEffect(() => { if (!subjects.length) dispatch(getAllSubjectsAsync()) }, subjects)
   useEffect(() => { if (!classrooms.length) dispatch(getAllClassroomsAsync()) }, classrooms)

   return (
      <div className="school-datas-container">
         <div className="subjects">
            <div>{getProfileSubjects(profile.subjectsIds, subjects)}</div>
         </div>

         <div className="classrooms">
            <div>{getProfileClassrooms(profile.classroomsIds, classrooms)}</div>
         </div>
      </div>
   )
}

const getProfileSubjects = (subjectsIds: string[], subjects: ISubject[]) => {
   const subjectsOptions = subjects.map((subject): SelectOption => {
      return {
         id: subject.id,
         optionText: subject.theme
      }
   })

   return subjectsIds.map(subjectId => (
      <div>
         <Select onChange={() => { }} defaultLabel="Matérias" options={subjectsOptions} selectedId={subjectId} />
         <DynamicActions onPlusClick={() => { }} onDeleteClick={() => { }} />
      </div>
   ));
}
const getProfileClassrooms = (classroomsIds: string[], classrooms: IClassroom[]) => {
   const classroomsOptions = classrooms.map((classroom): SelectOption => {
      return {
         id: classroom.id,
         optionText: classroom.room
      }
   })

   return classroomsIds.map(classroomId => (
      <div>
         <Select onChange={() => { }} defaultLabel="Sala de aulas" options={classroomsOptions} selectedId={classroomId} />
         <DynamicActions onPlusClick={() => { }} onDeleteClick={() => { }} />
      </div>
   ))
}