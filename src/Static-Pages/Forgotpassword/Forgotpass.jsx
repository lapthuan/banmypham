import React, { useState } from "react";
import styles from "./Forgotpass.module.css";
import facebook from "../LoginPage/logo/Facebook_F_icon.svg.png";
import google from "../LoginPage/logo/Google__G__Logo.svg.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button, Input, Space } from "antd";
import ReCAPTCHA from "react-google-recaptcha";
import { useGoogleLogin } from "@react-oauth/google";
import { signup, signupGoogle } from "../../redux/action/auth";
import { toast } from "react-toastify";
import axios from "axios";

const InitState = {
  email: "",
};

function Forgotpass() {
  const [randomPassword, setRandomPassword] = useState([]);
  const [emailNew, setEmailNew] = useState([]);
  const nagivate = useNavigate();
  const dispatch = useDispatch();
  const [sForm, setsForm] = useState(InitState);
  var checkMail =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  function handleGoogleLoginSuccess(tokenResponse) {
    const accessToken = tokenResponse.access_token;

    dispatch(signupGoogle(accessToken, nagivate));
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    if (sForm.password == "") {
      toast.warning("Vui lòng nhập đầy đủ thông tin đăng ký!");
      return;
    } else if (!checkMail.test(sForm.email) || sForm.email.length == "") {
      toast.warning("Email không hợp lệ!");
      return;
    }
  }
  const login = useGoogleLogin({ onSuccess: handleGoogleLoginSuccess });

  const generatePassword = () => {
    const length = 10; // Độ dài của mật khẩu
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; // Các ký tự sẽ được sử dụng để tạo mật khẩu
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
    }
    setRandomPassword(password);
    axios
      .post("http://localhost:5000/api/users/forgot-password-token", {
        email: emailNew,
      })
      .then((result) => {
        alert("Vui lòng kiểm tra lại email để đặt lại mật khẩu");
      })
      .catch((err) => {
        if (err.response.status == 500) {
          alert("Email không tồn tại");
        }
      });
    return password;
  };

  return (
    <div className={styles.main_register}>
      <div className={styles.register_existing}>
        <div className={styles.existing_user}>
          <div className={styles.existing_content_register}>
            <h4>Quên mật khẩu</h4>
            <div className={styles.ip_forgotpass_label}>
              Nhập địa chỉ email đã đăng ký
              <br />
              Sau đó kiểm tra email để đổi mật khẩu mới
            </div>
            <div className={styles.register_social_links}></div>
            <div>
              <span className="">Bạn đã có tài khoản?</span>
              <Link to={"/Login"}> Đăng nhập</Link>
            </div>
          </div>
        </div>
        <div className={styles.new_user}>
          <div className={styles.new_forgotpass_content}>
            <form className={styles.existing_forgotpass}>
              <Input
                type="email"
                required
                onChange={(e) => setEmailNew(e.target.value)}
                placeholder="Email"
                name="email"
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  generatePassword();
                }}
                className={styles.sing_register_button}
              >
                Xác nhận email
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Forgotpass;
