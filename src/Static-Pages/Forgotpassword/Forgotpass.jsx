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

const InitState = {
  email: "",
};

function Forgotpass() {
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
            <div className={styles.register_social_links}>
              {/* <Link to={""} className={styles.register_btn_fb}>
                <img src={facebook} alt="facebook_logo" />
                Facebook
              </Link>
              <Link
                onClick={() => login()}
                className={styles.register_btn_email}
              >
                <img src={google} alt="google_logo" />
                Google
              </Link> */}
            </div>
            <div>
              <span className="">Bạn đã có tài khoản?</span>
              <Link to={"/Login"}> Đăng nhập</Link>
            </div>
          </div>
        </div>
        <div className={styles.new_user}>
          <div className={styles.new_forgotpass_content}>
            <form className={styles.existing_forgotpass}>
              <Input required placeholder="Email" name="email" />
              <button className={styles.sing_register_button}>
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
