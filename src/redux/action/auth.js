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
    const localUser = JSON.parse(localStorage.getItem("user_info"));

    if (localUser) {
        dispath({ type: AUTH, data: localUser });
    }
};

export const signin = (data2, navigate) => async (dispatch) => {
    dispatch({ type: LOGIN_GET_LOADING });
    try {
        const { data } = await api.signIn(data2);
        console.log(data);
        return dispatch({ type: LOGIN_GET_SUCCESS, payload: data });
        toast.success("Đăng nhập thành công")
        navigate("/");

    } catch (err) {
        console.log(err);
    }
};

export const signinGoogle = (accessToken, navigate) => async (dispatch) => {
    dispatch({ type: LOGIN_GET_LOADING });
    try {
        // login user
        const { data } = await api.signInGoogle(accessToken);
        console.log(data);
        return dispatch({ type: LOGIN_GET_SUCCESS, payload: data });
        toast.success("Đăng nhập thành công")
        navigate("/");
    } catch (err) {
        console.log(err);
    }
};

export const signup = (formData, navigate) => async (dispatch) => {
    dispatch({ type: LOGIN_GET_LOADING });
    try {
        // signup user
        const { data } = await api.signUp(formData);
        console.log(data);
        return dispatch({ type: LOGIN_GET_SUCCESS, payload: data });
        toast.success("Đăng nhập ký thành công")

        navigate("/");

    } catch (err) {
        console.log(err);
    }
};

export const signupGoogle = (accessToken, navigate) => async (dispatch) => {
    dispatch({ type: LOGIN_GET_LOADING });
    try {

        const { data } = await api.signUpGoogle(accessToken);
        console.log(data);

        return dispatch({ type: LOGIN_GET_SUCCESS, payload: data });
        toast.success("Đăng nhập ký thành công")

        navigate("/");

    } catch (err) {
        console.log(err);
        if (err.response.status == "500") {
            toast.success("Email đã tồn tại")
        }
    }
};
