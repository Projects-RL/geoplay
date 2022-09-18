import React, { ChangeEvent, useState } from "react";
import style from "../styles/UserAuth.module.css";
import { signIn, signUp } from "../utils/auth";

function UserAuth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [tab, setTab] = useState("signIn");

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    } else if (e.target.name === "username") {
      setUsername(e.target.value);
    }
  }

  async function handleSubmit(
    email: string,
    password: string,
    username: string
  ) {
    if (tab === "signIn") {
      const response = await signIn(email, password);

      console.log(response);
    } else if (tab === "signUp") {
      const response = await signUp(email, password, username);

      console.log(response);
    }
  }

  function emptyInputs() {
    setEmail("");
    setPassword("");
    setUsername("");
  }

  return (
    <div className={style.container}>
      <section className={style.tabs}>
        <button
          className={tab === "signIn" ? style.active : ""}
          onClick={() => {
            setTab("signIn");
            emptyInputs();
          }}
        >
          Sign in
        </button>
        <div className={style.divider}></div>
        <button
          className={tab === "signUp" ? style.active : ""}
          onClick={() => {
            setTab("signUp");
            emptyInputs();
          }}
        >
          Sign up
        </button>
      </section>
      {tab === "signUp" && (
        <input
          name="username"
          type="text"
          placeholder="Username"
          onChange={handleOnChange}
          value={username}
        />
      )}
      <input
        name="email"
        type="email"
        placeholder="Email"
        onChange={handleOnChange}
        value={email}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleOnChange}
        value={password}
      />
      <input
        type="submit"
        value={tab === "signIn" ? "Sign in" : "Sign up"}
        onClick={() => handleSubmit(email, password, username)}
      />
    </div>
  );
}

export default UserAuth;
