export default interface IErrorResponse {
    statusCode: number
    errorMessage: string
    data: Array<Record<string, string>>
}