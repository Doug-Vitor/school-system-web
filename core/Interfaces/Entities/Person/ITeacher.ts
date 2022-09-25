import IPerson from "./IPerson";

export default interface ITeacher extends IPerson {
    userId: string
    subjectsIds: string[]
    classroomsIds: string[]
}