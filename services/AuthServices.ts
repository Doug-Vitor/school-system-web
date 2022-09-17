import IAuthenticatedInfos from '../core/Interfaces/API/IAuthenticatedInfos';

const LOCAL_STORAGE_KEY = "user";
const setStorageUser = (authenticatedInfos: IAuthenticatedInfos) => localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(authenticatedInfos));
const getStorageUser = () => JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) as string) as IAuthenticatedInfos;
const removeStorageUser = () => localStorage.removeItem(LOCAL_STORAGE_KEY);

const redirect = (url?: string) => location.href = url ?? '/';

const onAuthSuccess = (authenticatedInfos: IAuthenticatedInfos) => {
    setStorageUser(authenticatedInfos);
    redirect();
}

const onLogout = (redirectToUrl?: string) => {
    removeStorageUser();
    redirect(redirectToUrl);
}

export { setStorageUser, getStorageUser, removeStorageUser, onAuthSuccess, onLogout }