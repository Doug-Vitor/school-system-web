import IBaseEntity from "../IBaseEntity";

export default interface IStudentPerformance extends IBaseEntity {
    subjectId: string
    studentId: string
    academicYear: number
    year: number
    isApproved: string
}