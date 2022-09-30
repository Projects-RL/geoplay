import { ApiError, User } from '@supabase/supabase-js';
import { supabase } from '../config/supabase';

interface IStatusObj {
  success: boolean;
  user: User | null;
  error: string | null;
}

export async function signIn(email: string, password: string) {
  let statusObj: IStatusObj = {
    success: false,
    user: null,
    error: null,
  };

  const { user, error } = await supabase.auth.signIn({
    email,
    password,
  });

  if (user) {
    statusObj.user = user;
    statusObj.success = true;
  }
  if (error) {
    statusObj.error = error.message;
  }

  return statusObj;
}

export async function signUp(email: string, password: string) {
  let statusObj: IStatusObj = {
    success: false,
    user: null,
    error: null,
  };

  console.log('email', email);
  console.log('password', password);

  const { user, error } = await supabase.auth.signUp({ email, password });
  console.log('user', user);
  console.log('error', error);

  if (user) {
    statusObj.user = user;
    statusObj.success = true;
  }
  if (error) {
    statusObj.error = error.message;
  }

  return statusObj;
}

export async function updateUsername(username: string, id: string) {
  const response = await supabase
    .from('profile')
    .update({ display_name: username })
    .eq('id', id)
    .select();

  return response;
}

// export async function checkIfUserIsLoggedIn() {
//   const { data, error } = await supabase.auth.getUser();

//   if (data.user) {
//     return true;
//   }
//   return false;
// }
