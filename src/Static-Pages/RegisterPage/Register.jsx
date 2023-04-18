import React, { useState } from "react";
import styles from "./Register.module.css";
import facebook from "../LoginPage/logo/Facebook_F_icon.svg.png";
import google from "../LoginPage/logo/Google__G__Logo.svg.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button, Input, Space } from "antd";
import ReCAPTCHA from "react-google-recaptcha";
import { useGoogleLogin } from "@react-oauth/google";
import { signup, signupGoogle } from "../../redux/action/auth";
import { toast } from "react-toastify";

const InitState = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function Register() {
  const nagivate = useNavigate();
  const dispatch = useDispatch();
  const [sForm, setsForm] = useState(InitState);

  const handleChange = (e) =>
    setsForm({
      ...sForm,
      [e.target.name]: e.target.value,
    });

  function handleGoogleLoginSuccess(tokenResponse) {
    const accessToken = tokenResponse.access_token;

    dispatch(signupGoogle(accessToken, nagivate));
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    if (sForm.password === sForm.confirmPassword) {
      if (
        sForm.firstname !== "" &&
        sForm.lastname !== "" &&
        sForm.password !== "" &&
        sForm.confirmPassword !== "" &&
        sForm.email !== ""

      ) {
       
        console.log(sForm);
        dispatch(signup(sForm, nagivate));
      }
    } else {
      toast.success("Nhập lại mật khẩu không chính xác")

    }

  }
  const login = useGoogleLogin({ onSuccess: handleGoogleLoginSuccess });


  return (
    <div className={styles.main_register}>
      <div className={styles.register_existing}>
        <div className={styles.existing_user}>
          <div className={styles.existing_content_register}>
            <h4>Đăng ký</h4>
            <div className={styles.ip_register_label}>
              Đăng nhập để mua hàng và sử dụng những tiện ích mới nhất từ
              www.lixifake.com
            </div>
            <div className={styles.register_social_links}>
              <span>

                Facebook
              </span>
              <Link onClick={() => login()}>
                <img src={google} alt="google_logo" />
                Google
              </Link>
            </div>
            <div>
              <span>Bạn đã có tài khoản?</span>
              <Link to={"/Login"}> Đăng nhập</Link>
            </div>
          </div>
        </div>
        <div className={styles.new_user}>
          <div className={styles.new_register_content}>

            <Input
              required
              placeholder="Họ"
              name="firstname"
              onChange={handleChange}
            />
            <Input
              required
              placeholder="Tên"
              name="lastname"
              onChange={handleChange}
            />
            <Input
              required
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <Input
              required
              type="Number"
              placeholder="Số điện thoại"
              name="mobile"
              onChange={handleChange}
            />
            <Input placeholder="Mã giới thiệu" />
            <Input.Password
              placeholder="Nhập mật khẩu"
              name="password"
              onChange={handleChange}
            />
            <Input.Password placeholder="Nhập lại mật khẩu" name="confirmPassword" onChange={handleChange} />
            {/* <ReCAPTCHA sitekey="Your client site key" onChange={onChange} />, */}
            <button className={styles.sing_register_button} onClick={handleOnSubmit}>Đăng ký</button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
