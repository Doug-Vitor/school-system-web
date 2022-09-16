export default interface IErrorResponse {
    statusCode: number
    errorMessage: string
    data: Array<string>
}