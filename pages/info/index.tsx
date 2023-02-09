import React from 'react';
import style from './index.module.css';
import { BsGithub } from 'react-icons/bs';

function InfoPage() {
  return (
    <>
      <a href="/" className={style.goBack}>
        Go back
      </a>
      <div className={style.container}>
        <p>This is a small project made using Next, TypeScript and Mapbox</p>
        <a href="https://github.com/RobinLans/geoplay" id="bajs">
          <div className={style.linkContainer}>
            <BsGithub className={style.icon} />
            Source code
          </div>
        </a>
      </div>
    </>
  );
}

export default InfoPage;
