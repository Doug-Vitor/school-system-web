import { ReactElement } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { RootState } from "../../store";
import { logout } from "../../store/Authentication";

interface Props {
    children: ReactElement
}

export default (props: Props) => {
    const { token, ownsTeacherProfile } = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();
    
    const navigate = useNavigate();
    
    if (!ownsTeacherProfile) navigate('/Profile'); 
    if (token.generatedToken && new Date(token.expirationDate).valueOf() > new Date().valueOf()) return props.children;
    else dispatch(logout("/Authentication?loginRequired=true"));
    return null;
}