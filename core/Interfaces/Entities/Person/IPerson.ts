import IBaseEntity from "../IBaseEntity";

export default interface IPerson extends IBaseEntity {
    name: string
    birthdate?: Date
    realId: string
    phoneNumber: string
    zipCode: string;
}