export default interface IAuthenticationInfos {
    isAuthenticated: boolean
    authenticatedUserId: string
    authenticatedUsername: string
    isAdmin: boolean
    generatedToken: string
    expirationDate: Date
}