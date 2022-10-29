import styles from '@assets/styles/home/home.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react';

import { HomeSpacer } from './HomeSpacer';
import { HomeContent } from './HomeContent';

type HeaderProps = { title: string };

function HomeHeader({ title }: HeaderProps) {
  gsap.registerPlugin(ScrollTrigger);

  const spacerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const titleDiv = document.getElementById('title-1') as HTMLElement;
    const titleSpace = titleDiv?.offsetHeight || 100;

    const varSpace = getComputedStyle(titleDiv).getPropertyValue('font-size');

    const varSpaceAdj = Number(varSpace.slice(0, -2)) + 34;

    console.log(varSpaceAdj);

    let ctx = gsap.context(() => {
      // gsap.set('#title-4', {
      //   scaleY: 0,
      // });
      gsap.fromTo(
        '#title-1',
        {
          y: `${titleSpace}`,
        },
        {
          y: 24,
          scrollTrigger: {
            trigger: spacerRef.current,
            pin: true,
            start: 'bottom bottom',
            end: 'bottom top',
            scrub: 1,
            pinSpacing: false,
            markers: true,
          },
        }
      );
      gsap.fromTo(
        '#title-2',
        {
          y: `${titleSpace * 2}`,
        },
        {
          x: 5,
          y: 29,
          scrollTrigger: {
            trigger: spacerRef.current,
            pin: true,
            start: 'bottom bottom',
            end: 'bottom top',
            scrub: 1,
            pinSpacing: false,
          },
        }
      );
      gsap.fromTo(
        '#title-3',
        {
          y: `${titleSpace * 3}`,
        },
        {
          x: 10,
          y: 34,
          scrollTrigger: {
            trigger: spacerRef.current,
            pin: true,
            start: 'top bottom',
            end: 'top top',
            scrub: 1,
            pinSpacing: false,
          },
        }
      );
      gsap.fromTo(
        '#title-1, #title-2',
        {},
        {
          opacity: 0,
          zIndex: -1,
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top bottom',
            end: `top top+=${34 + titleSpace}`,
            scrub: 1,
            pinSpacing: false,
          },
        }
      );
      gsap.to('#title-3', {
        opacity: 1,
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
        scrollTrigger: {
          trigger: contentRef.current,
          scrub: true,
          start: `top top+=${varSpaceAdj}`,
          end: `top top`,
          pinSpacing: false,
        },
      });
      gsap.to('#title-4', {
        opacity: 1,
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        scrollTrigger: {
          trigger: contentRef.current,
          scrub: true,
          start: `top top+=${varSpaceAdj}`,
          end: `top top`,
          pinSpacing: false,
        },
      });
    });

    return () => ctx.revert(); // cleanup!
  }, []);

  const headerTitle = title.toUpperCase();

  return (
    <>
      <div className={styles['header-container']}>
        <h1 className={styles['header-title']}>
          <div id="title-1">{headerTitle}</div>
          <div id="title-2" aria-hidden="true">
            {headerTitle}
          </div>
          <div id="title-3" aria-hidden="true">
            {headerTitle}
          </div>
          <div id="title-4" aria-hidden="true">
            {headerTitle}
          </div>
        </h1>
      </div>
      <HomeSpacer ref={spacerRef}></HomeSpacer>
      <div className={`${styles['header__title_container']}`} ref={contentRef}>
        <div className={`${styles['header__title_background']}`}></div>
      </div>
    </>
  );
}

export default HomeHeader;
