import { options } from 'toastr';

options.closeButton = true;
options.progressBar = true;
options.tapToDismiss = true;
options.positionClass = "toast-bottom-right";

export { success, info, warning, error } from 'toastr';