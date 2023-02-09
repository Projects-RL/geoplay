import { useRouter } from 'next/router';
import React, { useState } from 'react';
import style from '../styles/MenuButtons.module.css';
import SmallMenu from './SmallMenu';

function MenuButtons() {
  const [activeBtn, setActiveBtn] = useState<string>('');
  const router = useRouter();

  const handleActiveBtn = (label: string) => () => {
    if (label === 'Info') {
      router.push('/info');
    }
    if (activeBtn === 'Play') {
      setActiveBtn('');
    } else {
      setActiveBtn(label);
    }
  };
  return (
    <section className={style.mainMenuBtns}>
      <button
        onClick={handleActiveBtn('Play')}
        className={
          activeBtn === 'Play'
            ? `${style.active} ${style.menuBtn}`
            : `${style.menuBtn}`
        }
      >
        Play
      </button>
      {activeBtn === 'Play' && <SmallMenu />}
      <button className={style.menuBtn} onClick={handleActiveBtn('Info')}>
        Info
      </button>
    </section>
  );
}

export default MenuButtons;
