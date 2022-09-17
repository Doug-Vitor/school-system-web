export default interface IAuthenticationInfos {
    isAuthenticated: boolean
    authenticatedUserId: string
    authenticatedUsername: string
    ownsTeacherProfile: boolean
    isAdmin: boolean
    token: {
        generatedToken: string
        expirationDate: Date
    }
}