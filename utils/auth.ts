import { AuthError, User } from "@supabase/supabase-js";
import { supabase } from "../config/supabase";

interface IStatusObj {
  success: boolean;
  user: User | null;
  error: AuthError | null;
}

export async function signIn(email: string, password: string) {
  let statusObj: IStatusObj = {
    success: false,
    user: null,
    error: null,
  };

  const {
    data: { user, session },
    error,
  } = await supabase.auth.signInWithPassword({ email, password });

  if (user) {
    statusObj.user = user;
    statusObj.success = true;
  }
  if (error) {
    statusObj.error = error;
  }

  return statusObj;
}

export async function signUp(email: string, password: string) {
  let statusObj: IStatusObj = {
    success: false,
    user: null,
    error: null,
  };

  const {
    data: { user, session },
    error,
  } = await supabase.auth.signUp({ email, password });

  if (user) {
    statusObj.user = user;
    statusObj.success = true;
  }
  if (error) {
    statusObj.error = error;
  }

  return statusObj;
}

export async function updateUsername(username: string, id: string) {
  const response = await supabase
    .from("profile")
    .update({ display_name: username })
    .eq("id", id)
    .select();

  return response;
}
