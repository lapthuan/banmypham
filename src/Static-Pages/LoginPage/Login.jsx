import React, { useState, useEffect } from "react";
import { useNavigate, link, Link } from "react-router-dom";
import styles from "./Login.module.css";
import facebook from "./logo/Facebook_F_icon.svg.png";
import google from "./logo/Google__G__Logo.svg.png";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../redux/login/login.actions";

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
              www.lixifake.com
            </div>
            <div className={styles.social_links}>
              <a href="./" className={styles.btn_fb}>
                <img src={facebook} alt="facebook_logo" />
                Facebook
              </a>
              <a href="./" className={styles.btn_email}>
                <img src={google} alt="google_logo" />
                Google
              </a>
            </div>
            <div>
              <span>Bạn chưa có tài khoản?</span>
              <a href="/Register" className={styles.forget_password}>
                Đăng ký
              </a>
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
              <input
                type="email"
                name="email"
                placeholder="Email"
                className={styles.ip_email}
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Mật khẩu"
                className={styles.ip_password}
                onChange={handleChange}
              />
              <button className={styles.sing_in_button}>Đăng nhập</button>
              <a href="./" className={styles.forget_password}>
                Quên mật khẩu?
              </a>
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
