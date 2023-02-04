import { useRouter } from 'next/router';
import React, { Dispatch, SetStateAction } from 'react';
import { useAppDispatch } from '../hooks/hooks';
import { handleShowSideMenu } from '../redux/features/componentHandlingSlice';
import { handleReady } from '../redux/features/gameOptionsSlice';
import style from '../styles/SideMenu.module.css';

interface Props {
  page: string;
  playerHasClickedReady?: boolean;
  setShowGameInfo?: Dispatch<SetStateAction<boolean>>;
}

function SideMenu({ page, playerHasClickedReady, setShowGameInfo }: Props) {
  const dispatch = useAppDispatch();
  const router = useRouter();

  function handleExit() {
    dispatch(handleShowSideMenu(false));
  }

  async function handleExitGame() {
    dispatch(handleReady(false));
    dispatch(handleShowSideMenu(false));
    await router.push('/');
  }

  return (
    <div className={style.container}>
      <button className={style.exitBtn} onClick={handleExit}>
        X
      </button>
      <div className={style.btnContainer}>
        {page === 'Game' && setShowGameInfo && (
          <>
            <button
              className={!playerHasClickedReady ? `${style.disabledBtn}` : ''}
              disabled={!playerHasClickedReady}
              onClick={() => {
                setShowGameInfo(true);
                handleExit();
              }}
            >
              Game Info
            </button>
            <button onClick={handleExitGame}>Exit Game</button>
          </>
        )}
      </div>
    </div>
  );
}

export default SideMenu;
