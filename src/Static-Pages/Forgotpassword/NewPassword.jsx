import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
    <div>
      <form>
        <input
          type="text"
          required
          placeholder="Mật khẩu"
          onChange={(e) => setPw(e.target.value)}
        />
        <input
          type="text"
          required
          name=""
          placeholder="Nhập lại mật khẩu"
          onChange={(e) => setNewPw(e.target.value)}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            password();
          }}
        >
          Xác nhận
        </button>
      </form>
    </div>
  );
};

export default NewPassword;
