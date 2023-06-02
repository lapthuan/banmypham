import {
  AUTH,
  LOGIN_GET_LOADING,
  LOGIN_GET_SUCCESS,
  LOGIN_GET_ERROR,
  UPDATE_GET_SUCCESS,
  UPDATE_GET_FAILED,
  UPDATE_GET_REQUEST,
  LOGOUT_GET,
} from "../const/actionsTypes";
import * as api from "../../api/index";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import axios from "axios";

const test = "test";
const apis = axios.create({
  baseURL: "https://api-thuongmai.vercel.app",
});


export const loadUser = () => async (dispath) => {
  const localUser = JSON.parse(localStorage.getItem("user_infos"));
  if (localUser) {
    dispath({ type: LOGIN_GET_SUCCESS, payload: localUser });
  }
};

export const signin = (data2, navigate) => async (dispatch) => {
  dispatch({ type: LOGIN_GET_LOADING });
  const MAX_LOGIN_ATTEMPTS = 3;
  const LOCKOUT_DURATION = 3 * 1000;
  const storedAttempts =
    parseInt(window.localStorage.getItem("loginAttempts")) || 0;
  const lockoutTime = parseInt(window.localStorage.getItem("lockoutTime")) || 0;
  const currentTime = new Date().getTime();
  if (lockoutTime && currentTime - lockoutTime < LOCKOUT_DURATION) {
    toast.error("Tài khoản của bạn đã bị khóa. Vui lòng thử lại sau.");
    return;
  }
  apis
    .get(`/api/users/find/${data2.email}`)
    .then((result) => {
      console.log(result);
      console.log(result.data.isBlocked);
      if (result.data.isBlocked == true) {
        toast.error("Tài khoản đã bị khóa vui lòng liên hệ Admin để mở  lại");
      }
    })
    .catch((err) => {
      console.log(err);
    });
  window.localStorage.setItem("loginAttempts", "0");
  window.localStorage.setItem("lockoutTime", "0");
  console.log(currentTime - lockoutTime);
  if (storedAttempts < MAX_LOGIN_ATTEMPTS) {
    try {
      const { data } = await api.signIn(data2);
      console.log(data);
      if (data.isBlocked === true) {
        toast.error("Tài khoản đã bị khóa vui lòng liên hệ Admin để mở  lại");
        return;
      }
      toast.success("Đăng nhập thành công");
      await window.localStorage.setItem("loginAttempts", "0");
      await window.localStorage.setItem("lockoutTime", "0");
      navigate("/");
      return dispatch({ type: LOGIN_GET_SUCCESS, payload: data });
    } catch (err) {
      if (err.response.data.message == "Invalid Credentials") {
        toast.error("Sai tài khoản hoặc mật khẩu");
        await window.localStorage.setItem(
          "loginAttempts",
          (storedAttempts + 1).toString()
        );
        if (storedAttempts + 1 === MAX_LOGIN_ATTEMPTS) {
          await window.localStorage.setItem(
            "lockoutTime",
            currentTime.toString()
          );
          await apis
            .post(`/api/users/block-user/${data2.email}`)
            .then((result) => {
              console.log(result);
              toast.error("Tài khoản đã bị khóa");
            })
            .catch((err) => {
              console.log(err);
            });
          // toast.error(
          //   "Bạn đã vượt quá số lần đăng nhập sai cho phép. Tài khoản của bạn sẽ bị khóa trong 5 phút."
          // );
        }
      }
    }
  } else if (lockoutTime && currentTime - lockoutTime > LOCKOUT_DURATION) {
    await window.localStorage.setItem("loginAttempts", "0");
    await window.localStorage.setItem("lockoutTime", "0");
    try {
      const { data } = await api.signIn(data2);
      console.log(data);
      await window.localStorage.setItem("loginAttempts", "0");
      await window.localStorage.setItem("lockoutTime", "0");
      toast.success("Đăng nhập thành công");
      navigate("/");
      return dispatch({ type: LOGIN_GET_SUCCESS, payload: data });
    } catch (err) {
      if (err.response.data.message == "Invalid Credentials") {
        toast.error("Sai tài khoản hoặc mật khẩu");
        await window.localStorage.setItem(
          "loginAttempts",
          (storedAttempts + 1).toString()
        );
        if (storedAttempts + 1 === MAX_LOGIN_ATTEMPTS) {
          await window.localStorage.setItem(
            "lockoutTime",
            currentTime.toString()
          );
          await apis
            .post(`/api/users/block-user/${data2.email}`)
            .then((result) => {
              console.log(result);
              toast.error("Tài khoản đã bị khóa");
            })
            .catch((err) => {
              console.log(err);
            });
          // toast.error(
          //   "Bạn đã vượt quá số lần đăng nhập sai cho phép. Tài khoản của bạn sẽ bị khóa trong 5 phút."
          // );
        }
      }
    }
  } else {
    toast.error("Đăng nhập bị khóa do quá nhiều lần đăng nhập sai.");
  }
};

export const signinGoogle = (accessToken, navigate) => async (dispatch) => {
  dispatch({ type: LOGIN_GET_LOADING });
  try {
    const { data } = await api.signInGoogle(accessToken);
    if (data.isBlocked == true) {
      toast.error("Tài khoản đã bị khóa");
      return;
    }
    toast.success("Đăng nhập thành công");
    navigate("/");
    console.log(data);
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

    toast.success("Đăng ký thành công");
    navigate("/");
    return dispatch({ type: LOGIN_GET_SUCCESS, payload: data });
  } catch (err) {
    if (err.response.status == "500") {
      return toast.error("Email đã tồn tại");
    }
  }
};

export const signupGoogle = (accessToken, navigate) => async (dispatch) => {
  dispatch({ type: LOGIN_GET_LOADING });
  try {
    const { data } = await api.signUpGoogle(accessToken);
    toast.success("Đăng ký thành công");
    navigate("/");
    return dispatch({ type: LOGIN_GET_SUCCESS, payload: data });
  } catch (err) {
    console.log(err);
    if (err.response.status == "500") {
      return toast.error("Email đã tồn tại");
    }
  }
};

export const logout = () =>

  async (dispatch) => {
    // to remove all userinfo at the time of user logout
    toast.success("Đăng xuất thành công");
    dispatch({
      type: LOGOUT_GET,
    });
  };

export const updateUser = (id, firstName, lastName, email, phone) => async (dispatch) => {
  dispatch({ type: LOGIN_GET_LOADING });
  try {
    apis.put(`/api/users/edit-user/${id}`, {
      firstname: firstName,
      lastname: lastName,
      email: email,
      mobile: phone
    }).then((response) => {
      console.log(response);
      dispatch({ type: LOGIN_GET_SUCCESS, payload: response.data })
      toast.promise(Promise.resolve(response.data), // Sử dụng Promise.resolve để tạo một promise đã được giải quyết
        {
          pending: 'Đang xử lý',
          success: 'Thành công',
          error: 'Lỗi'
        }
      );
    })
  } catch (error) {
    dispatch({
      type: LOGIN_GET_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

export const updateUserAddress = (id, city, district, ward, address) => async (dispatch) => {
  dispatch({ type: LOGIN_GET_LOADING });

  try {
    apis.put(`/api/users/save-address/${id}`, {
      city: city,
      district: district,
      ward: ward,
      address: address
    }).then((response) => {
      console.log(response);
      dispatch({ type: LOGIN_GET_SUCCESS, payload: response.data })
      toast.promise(Promise.resolve(response.data), // Sử dụng Promise.resolve để tạo một promise đã được giải quyết
        {
          pending: 'Đang xử lý',
          success: 'Thành công',
          error: 'Lỗi'
        }
      );
    })
  } catch (error) {
    dispatch({
      type: LOGIN_GET_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,

    });
  }
}
