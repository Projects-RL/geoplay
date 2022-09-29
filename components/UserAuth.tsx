import React, { ChangeEvent, useState } from "react";
import { useAppDispatch } from "../hooks/hooks";
import { handleShowSignIn } from "../redux/features/componentHandlingSlice";
import { handleIsLoggedIn } from "../redux/features/userSlice";
import style from "../styles/UserAuth.module.css";
import { signIn, signUp, updateUsername } from "../utils/auth";

function UserAuth() {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [tab, setTab] = useState("signIn");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

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
      const signInResponse = await signIn(email, password);

      if (signInResponse.success) {
        dispatch(handleShowSignIn(false));
        dispatch(handleIsLoggedIn(true));
      } else {
        setErrorMsg(signInResponse.error);
      }
    } else if (tab === "signUp") {
      if (!username) {
        setErrorMsg("Choose a username");
        return;
      }
      const signUpResponse = await signUp(email, password);

      if (signUpResponse.user) {
        const updateUsernameResponse = await updateUsername(
          username,
          signUpResponse.user.id
        );

        if (updateUsernameResponse.data) {
          dispatch(handleShowSignIn(false));
          dispatch(handleIsLoggedIn(true));
        } else {
          setErrorMsg(updateUsernameResponse.error?.message);
        }
      } else {
        setErrorMsg(signUpResponse.error);
      }
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
      {errorMsg && <p>{errorMsg}</p>}
    </div>
  );
}

export default UserAuth;
