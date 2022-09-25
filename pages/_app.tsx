import React, { useEffect } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { supabase } from "../config/supabase";
import { AuthChangeEvent, Session } from "@supabase/supabase-js";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        handleAuthChange(event, session);
      }
    );

    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  async function handleAuthChange(
    event: AuthChangeEvent,
    session: Session | null
  ) {
    await fetch("/api/auth", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      credentials: "same-origin",
      body: JSON.stringify({ event, session }),
    });
  }

  return (
    <Provider store={store}>
      <Component {...pageProps} />;
    </Provider>
  );
}

export default MyApp;
