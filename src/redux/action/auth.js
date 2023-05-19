import {
    AUTH,
    LOGIN_GET_LOADING,
    LOGIN_GET_SUCCESS,
    LOGIN_GET_ERROR,
    UPDATE_GET_SUCCESS,
    LOGOUT_GET,
} from "../const/actionsTypes";
import * as api from "../../api/index";
import { toast } from "react-toastify";


export const loadUser = () => async (dispath) => {
    const localUser = JSON.parse(localStorage.getItem("user_infos"));
    if (localUser) {
        dispath({ type: LOGIN_GET_SUCCESS, payload: localUser });
    }
};

export const signin = (data2, navigate) => async (dispatch) => {
    dispatch({ type: LOGIN_GET_LOADING });
    try {
        const { data } = await api.signIn(data2);

        toast.success("Đăng nhập thành công")
        navigate("/");
        return dispatch({ type: LOGIN_GET_SUCCESS, payload: data });



    } catch (err) {
        console.log(err);

        if (err.response.data.message == "Invalid Credentials") {

            toast.error("Sai tài khoản hoặc mật khẩu")
        }
    }
};

export const signinGoogle = (accessToken, navigate) => async (dispatch) => {
    dispatch({ type: LOGIN_GET_LOADING });
    try {

        const { data } = await api.signInGoogle(accessToken);

        toast.success("Đăng nhập thành công")
        navigate("/");

        return dispatch({ type: LOGIN_GET_SUCCESS, payload: data });

    } catch (err) {
        console.log(err);
        if (err.response.data.message == "User don't exist!") {
            const { data } = await api.signUpGoogle(accessToken);
            console.log(data.result);

            navigate("/");
            return dispatch({ type: LOGIN_GET_SUCCESS, payload: data.result });
        }
    }
};

export const signup = (formData, navigate) => async (dispatch) => {
    dispatch({ type: LOGIN_GET_LOADING });

    try {
        // signup user

        const { data } = await api.signUp(formData);
        console.log(data);

        toast.success("Đăng ký thành công")
        navigate("/");
        return dispatch({ type: LOGIN_GET_SUCCESS, payload: data });


    } catch (err) {
        if (err.response.status == "500") {
            return toast.error("Email đã tồn tại")
        }
    }
};

export const signupGoogle = (accessToken, navigate) => async (dispatch) => {
    dispatch({ type: LOGIN_GET_LOADING });
    try {

        const { data } = await api.signUpGoogle(accessToken);
        toast.success("Đăng ký thành công")
        navigate("/");
        return dispatch({ type: LOGIN_GET_SUCCESS, payload: data });

    } catch (err) {
        console.log(err);
        if (err.response.status == "500") {
            return toast.error("Email đã tồn tại")
        }
    }
};
