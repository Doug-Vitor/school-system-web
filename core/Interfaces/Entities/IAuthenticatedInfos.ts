export default interface IAuthenticatedInfos {
    authenticatedUserId: string
    isAdmin: boolean
    generatedToken: string
    expirationDate: Date
}