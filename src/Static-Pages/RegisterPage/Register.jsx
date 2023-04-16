import React, { useState } from "react";
import styles from "./Register.module.css";
import facebook from "../LoginPage/logo/Facebook_F_icon.svg.png";
import google from "../LoginPage/logo/Google__G__Logo.svg.png";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../redux/signup/signup.actions";
import { useSelector, useDispatch } from "react-redux";
import { Button, Input, Space } from "antd";
import ReCAPTCHA from "react-google-recaptcha";
function Register() {
  const [userdetails, setuserdetails] = useState({});
  const navigate = useNavigate();
  const { isloading, iserror, isauth } = useSelector((store) => store.signup);
  const dispatch = useDispatch();
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setuserdetails({
      ...userdetails,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !userdetails.firstname ||
      !userdetails.email ||
      !userdetails.password ||
      !userdetails.lastname
    ) {
      alert("Please fill all you details");
    } else {
      {
        alert("Your account has been Created");
      }
      dispatch(signup(userdetails));
    }
  };
  if (isauth) {
    navigate("/Login");
  }
  if (isloading) {
    return (
      <img src="https://flevix.com/wp-content/uploads/2020/01/Bounce-Bar-Preloader-1.gif"></img>
    );
  } else if (iserror) {
    return alert("Incorrect email or password");
  }

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
                <img src={facebook} alt="facebook_logo" />
                Facebook
              </span>
              <Link>
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
            <form onSubmit={handleSubmit} className={styles.existing_register}>
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
              <Input.Password placeholder="Nhập lại mật khẩu" name="password" />
              <ReCAPTCHA sitekey="Your client site key" onChange={onChange} />,
              <button className={styles.sing_register_button}>Đăng ký</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
