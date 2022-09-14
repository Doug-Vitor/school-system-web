export default interface IDefaultResponse<T> {
    statusCode: number;
    message: string;
    data: T;
    pagination?: {
        currentPage: number
        hasPreviousPage: boolean
        hasNextPage: boolean
    };
}