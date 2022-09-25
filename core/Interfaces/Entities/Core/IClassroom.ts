import IBaseEntity from "../IBaseEntity";

export default interface IClassroom extends IBaseEntity {
    room: string
    forAcademicYear: number
    maxLength: number
}