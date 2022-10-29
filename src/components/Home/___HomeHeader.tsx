import styles from '@assets/styles/home/home.module.css';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { useRef, useEffect } from 'react';

type HeaderProps = { title: string };

function HomeHeader({ title }: HeaderProps) {
  const headerTitle = title.toUpperCase();

  return (
    <>
      <div id="header-container">
        <h1 className={styles['header-title']}>
          <div id="title-1">{headerTitle}</div>
          <div id="title-2" aria-hidden="true">
            {headerTitle}
          </div>
          <div id="title-3" aria-hidden="true">
            {headerTitle}
          </div>
        </h1>
      </div>
      <div style={{ minHeight: '100vh' }}></div>
    </>
  );
}

export default HomeHeader;
