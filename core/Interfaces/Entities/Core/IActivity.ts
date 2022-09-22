import IBaseEntity from "../IBaseEntity";

export default interface IActivity extends IBaseEntity {
    description: string
    grade: number
    studentPerformanceId: string
}