import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/index";

const LoginPage = () => {

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((res) => console.log(res.user))
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="wrapper">
      <div className="containerr">
        <h1 className="text-4xl font-bold">CHAT ROOM</h1>
        <p className="text">Log in to continue</p>

        <button
          onClick={handleLogin}
          className="flex gap-4 items-center border p-2 rounded-md px-4 shadow-lg hover:bg-[#e8e8e9] hover:shadow-2xl transition cursor-pointer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
            alt=""
            className="w-[30px]"
          />
          <span className="font-semibold">Login with Google</span>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
