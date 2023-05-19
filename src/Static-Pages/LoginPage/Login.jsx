import React, { useState, useEffect } from "react";
import { useNavigate, link, Link } from "react-router-dom";
import styles from "./Login.module.css";
import facebook from "./logo/Facebook_F_icon.svg.png";
import google from "./logo/Google__G__Logo.svg.png";
import { useSelector, useDispatch } from "react-redux";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Input, Space } from "antd";
import axios from "axios";
import { signin, signinGoogle } from "../../redux/action/auth";
import OAuth2Login from "react-simple-oauth2-login";
import { useGoogleLogin } from "@react-oauth/google";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const MAX_LOGIN_ATTEMPTS = 3;
  const storedAttempts =
    parseInt(window.localStorage.getItem("loginAttempts")) || 0;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [numberLogin, setNumberLogin] = useState(0);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleGoogleLoginSuccess(tokenResponse) {
    const accessToken = tokenResponse.access_token;
    toast.error("Đang xử lý");
    dispatch(signinGoogle(accessToken, navigate));
  }
  
  const login = useGoogleLogin({ onSuccess: handleGoogleLoginSuccess });

  const loginFb = async (e) => {
    const accessToken = e.access_token;
    const typeLogin = "facebook";
    const callApi = await axios
      .post("http://localhost:5000/api/users/login", {
        accessToken,
        typeLogin,
      })
      .then((result) => {
        toast.success("Đăng nhập thành công !");
        console.log(result);
      })
      .catch((err) => {
        window.localStorage.setItem();
        console.log(err.response.data);
        if (err.response.status == 400) {
          toast.error("Người dùng không tồn tại vui lòng đăng ký");
        }
      });
  };

  const onFailure = (e) => {
    console.log(e);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (email !== "" && password !== "") {
      dispatch(signin({ email, password }, navigate));
    }
  }

  return (
    <div className={styles.main_login}>
      <ToastContainer />
      <div className={styles.new_existing}>
        <div className={styles.existing_user}>
          <form action="" className={styles.existing_content_login}>
            <div className={styles.img}></div>
            <h4>Đăng nhập</h4>
            <div className={styles.ip_label}>
              Đăng nhập để mua hàng và sử dụng những tiện ích mới nhất từ
              www.luxubu.com
            </div>
            <div className={styles.social_links}>
              <Link to={""} className={styles.btn_fb}>
                <img src={facebook} alt="facebook_logo" />
                <OAuth2Login
                  buttonText="Facebook"
                  authorizationUrl="https://www.facebook.com/dialog/oauth"
                  responseType="token"
                  clientId="203369009102213"
                  redirectUri="http://localhost:3000/"
                  scope="public_profile"
                  onSuccess={loginFb}
                  onFailure={onFailure}
                />
              </Link>
              <div></div>
              <Link onClick={() => login()} className={styles.btn_email}>
                <img src={google} alt="google_logo" />
                Google
              </Link>
            </div>
            <div>
              <span>Bạn chưa có tài khoản?</span>
              <Link to={"/Register"}>Đăng ký</Link>
            </div>
          </form>
        </div>
        <div className={styles.new_user}>
          <div className={styles.new_user_content}>
            <form action="" className={styles.existing_content}>
              <Input
                autoFocus
                type="email"
                name="email"
                required
                placeholder="Nhập email..."
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input.Password
                required
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Nhập mật khẩu ..."
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />

              <button className={styles.sing_in_button} onClick={handleSubmit}>
                Đăng nhập
              </button>
              <Link to={"/Forgotpass"}>Quên mật khẩu?</Link>
            </form>
            {/* <button className={styles.new_continue}>
              {" "}
              <Link to="/Register" style={{ color: "white" }}>
                Continue
              </Link>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
