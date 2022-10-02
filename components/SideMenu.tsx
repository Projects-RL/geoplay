import React from 'react';
import { useAppDispatch } from '../hooks/hooks';
import { handleShowSideMenu } from '../redux/features/componentHandlingSlice';
import style from '../styles/SideMenu.module.css';

function SideMenu() {
  const dispatch = useAppDispatch();

  function handleExit() {
    dispatch(handleShowSideMenu(false));
  }

  return (
    <div className={style.container}>
      <button className={style.exitBtn} onClick={handleExit}>
        X
      </button>
      <div className={style.btnContainer}>
        <button>Profile Page</button>
        <button>Settings</button>
        <button>Sign Out</button>
      </div>
    </div>
  );
}

export default SideMenu;
