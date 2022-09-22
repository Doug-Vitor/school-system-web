import IPerson from "./IPerson";

export default interface IStudent extends IPerson {
    classroomId: string
    academicYear: number
    medicalObservations?: string | undefined
    isActive: boolean;
}