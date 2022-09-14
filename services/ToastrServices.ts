import { options, error } from 'toastr';

options.closeButton = true;
options.progressBar = true;
options.tapToDismiss = true;
options.positionClass = "toast-bottom-right";

const showErrors = (apiErrors: Array<Record<string, string>>) => {
    console.log(apiErrors);
    apiErrors.forEach(apiError => {
        Object.values(apiError).forEach(value => error(value, "Whoaps! Ocorreu um erro na sua solicitação:"));
    });
}

export { showErrors }