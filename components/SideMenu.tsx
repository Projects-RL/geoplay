import React from 'react';
import { supabase } from '../config/supabase';
import { useAppDispatch } from '../hooks/hooks';
import { handleShowSideMenu } from '../redux/features/componentHandlingSlice';
import { handleIsLoggedIn } from '../redux/features/userSlice';
import style from '../styles/SideMenu.module.css';

function SideMenu() {
  const dispatch = useAppDispatch();

  function handleExit() {
    dispatch(handleShowSideMenu(false));
  }

  async function handleSignOut() {
    const { error } = await supabase.auth.signOut();

    console.log('halloj');
    console.log(error);

    if (error) {
      console.log(error);
      return;
    } else {
      dispatch(handleShowSideMenu(false));
      dispatch(handleIsLoggedIn(false));
    }
  }

  return (
    <div className={style.container}>
      <button className={style.exitBtn} onClick={handleExit}>
        X
      </button>
      <div className={style.btnContainer}>
        <button>Profile Page</button>
        <button>Settings</button>
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    </div>
  );
}

export default SideMenu;
