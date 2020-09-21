import React, { useEffect, useState } from "react";
import "./Login.scss";
import { loginUrl, getTokenFromUrl } from "../../spotify";

function Login() {

  return (
    <div className="login">
      {/* spotify logo */}
      <h1>Login</h1>
      <img
        src={
          "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png"
        }
      />
      {/* login btns */}
      <a href={loginUrl}>Login with Spotify</a>
    </div>
  );
}

export default Login;
