import React, { useState, useEffect } from "react";
import { useNavigate, link, Link } from "react-router-dom";
import styles from "./Login.module.css";
import facebook from "./logo/Facebook_F_icon.svg.png";
import google from "./logo/Google__G__Logo.svg.png";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../redux/login/login.actions";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Input, Space } from "antd";

const Login = () => {
  const { isauth, iserror, isloading, user } = useSelector(
    (store) => store.login
  );
  const [loginDetails, setloginDetails] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setloginDetails({
      ...loginDetails,
      [name]: value,
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (!loginDetails.email || !loginDetails.password) {
      alert("Please enter all details");
    } else {
      dispatch(login(loginDetails));
    }
  };

  useEffect(() => {
    if (iserror) {
      alert("Incorrect Email or password");
    } else if (isauth) {
      if (user.role == "seller") {
        navigate("/addproduct");
      } else if (user.role == "admin") {
        navigate("/showusers");
      } else {
        navigate("/Sale");
      }

      alert("Logged in successfully");
    }
  }, [isauth, iserror]);

  if (isloading) {
    return (
      <img
        src="https://flevix.com/wp-content/uploads/2020/01/Bounce-Bar-Preloader-1.gif"
        alt="loading"
      />
    );
  }

  return (
    <div className={styles.main_login}>
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
                Facebook
              </Link>
              <Link to="./" className={styles.btn_email}>
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
            <form
              action=""
              className={styles.existing_content}
              onSubmit={handleLogin}
            >
              <Input
                autoFocus
                type="email"
                name="email"
                required
                placeholder="Nhập email..."
                onChange={handleChange}
              />
              <Input.Password
                required
                onChange={handleChange}
                placeholder="Nhập mật khẩu ..."
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />

              <button className={styles.sing_in_button}>Đăng nhập</button>
              <Link to={"/Login"}>Quên mật khẩu?</Link>
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
