import { success, info, warning, error } from '../configs/Toastr';

type NotificationType = "success" | "info" | "warning" | "error";

const showToastrInfo = (infoMessage: string | Array<string>) =>
    infoMessage instanceof Array<string> ? infoMessage.forEach(message => info(message)) : info(infoMessage);

const showToastrSuccesss = (successMessage: string | Array<string>) =>
    successMessage instanceof Array<string> ? successMessage.forEach(message => success(message)) : success(successMessage);

const showToastrWarning = (warningMessage: string | Array<string>) => 
    warningMessage instanceof Array<string> ? warningMessage.forEach(message => warning(message)) : warning(warningMessage);

const showToastrError = (errorMessage: string | Array<string>) => {
    const title = "Whoaps! Ocorreu um erro:"
    errorMessage instanceof Array<string> ? errorMessage.forEach(message => error(message, title)) : error(errorMessage, title); 
}

export default (message: string | Array<string>, notificationType: NotificationType) => {
    switch (notificationType) {
        case "info":
            showToastrInfo(message);
            break;
        case "success":
            showToastrSuccesss(message);
            break;
        case "warning":
            showToastrWarning(message);
            break;
        case "error":
            showToastrError(message);
            break;
        default:
            showToastrInfo(message);
            break;
    }
}