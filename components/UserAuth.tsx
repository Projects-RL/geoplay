import React, { ChangeEvent, useState } from "react";
import style from "../styles/UserAuth.module.css";

function UserAuth() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  }

  function handleSubmit(username: string, password: string) {
    console.log("username:", username);
    console.log("password:", password);
  }

  return (
    <div className={style.container}>
      <input
        name="username"
        type="text"
        placeholder="username"
        onChange={handleOnChange}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        onChange={handleOnChange}
      />
      <input
        type="submit"
        value="Sign In"
        onClick={() => handleSubmit(username, password)}
      />
    </div>
  );
}

export default UserAuth;
