import axios from "axios";
import styles from "./Forgotpass.module.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input, Space } from "antd";

const NewPassword = () => {
  const [pw, setPw] = useState([]);
  const [newPw, setNewPw] = useState([]);
  const { token } = useParams();

  const password = async () => {
    if (pw == newPw) {
      await axios
        .put(`http://localhost:5000/api/users/reset-password/${token}`, {
          password: pw,
        })
        .then((result) => {
          console.log("result", result);
          alert("Mật khẩu đã đổi thành công");
        })
        .catch((err) => {
          console.log("err", err);
          if (err.response.status == 500) {
            alert("Mã đã hết hạn");
          } else {
            alert("Mật khẩu đổi không thành công");
          }
        });
    } else {
      alert("Failed to change password");
    }
  };

  return (
    <div className={styles.main_register}>
      <div className={styles.register_existing}>
        <div className={styles.existing_user}>
          <div className={styles.existing_content_register}>
            <h4>Cập nhật mật khẩu</h4>
            <div className={styles.ip_forgotpass_label}>
              Hãy cập nhật lại mật khẩu mới và tiếp tục trải nghiệm nào
              <br />
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
              <Input.Password
                type="password"
                required
                placeholder="Mật khẩu"
                onChange={(e) => setPw(e.target.value)}
              />
              <Input.Password
                type="password"
                required
                name=""
                placeholder="Nhập lại mật khẩu mới"
                onChange={(e) => setNewPw(e.target.value)}
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  password();
                }}
                className={styles.sing_register_button}
              >
                Xác nhận
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
