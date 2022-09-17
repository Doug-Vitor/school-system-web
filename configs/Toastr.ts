import { options } from 'toastr';

options.closeButton = true;
options.progressBar = true;
options.tapToDismiss = true;
options.positionClass = "toast-bottom-right";
options.preventDuplicates = true;

export { success, info, warning, error } from 'toastr';