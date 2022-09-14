import IAuthenticatedInfos from '../core/Interfaces/Entities/IAuthenticatedInfos';

const LOCAL_STORAGE_KEY = "user";
const setStorageUser = (authenticatedInfos: IAuthenticatedInfos) => localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(authenticatedInfos));
const getStorageUser = () => JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) as string) as IAuthenticatedInfos;
const removeStorageUser = () => localStorage.removeItem(LOCAL_STORAGE_KEY);

const redirect = () => location.href = '/';

const onAuthSuccess = (authenticatedInfos: IAuthenticatedInfos) => {
    setStorageUser(authenticatedInfos);
    redirect();
}

const onLogout = () => {
    removeStorageUser();
    redirect();
}

export { setStorageUser, getStorageUser, removeStorageUser, onAuthSuccess, onLogout }