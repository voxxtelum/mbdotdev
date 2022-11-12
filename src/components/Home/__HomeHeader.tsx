import { StylesContext } from '@context/Styles';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef, useLayoutEffect } from 'react';

type HeaderProps = { title: string };

function HomeHeader({ title }: HeaderProps) {
  const { styles } = React.useContext(StylesContext);

  gsap.registerPlugin(ScrollTrigger);

  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const titleDiv = document.getElementById('title-1') as HTMLElement;
    const titleSpace = titleDiv?.offsetHeight || 100;

    // const varSpace = getComputedStyle(titleDiv).getPropertyValue('font-size');

    // const varSpaceAdj = Number(varSpace.slice(0, -2)) + 34;

    const docStyle = getComputedStyle(document.documentElement);
    const fsSmall = docStyle.getPropertyValue('--fs-sm');
    const fslarge = docStyle.getPropertyValue('--fs-lg');

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: contentRef.current,
          pin: true,
          start: 'top bottom',
          end: 'top top',
          scrub: 0.5,
          pinSpacing: false,
          invalidateOnRefresh: true,
        },
      });

      timeline
        .fromTo(
          '#title-1',
          { y: () => titleSpace * 2 },
          {
            y: () => titleSpace,
          },
          0
        )
        .fromTo(
          '#title-2',
          { y: () => titleSpace * 3 },
          {
            x: 5,
            y: () => titleSpace,
          },
          0
        )
        .fromTo(
          '#title-3',
          { y: () => titleSpace * 4 },
          {
            x: 10,
            y: () => titleSpace,
          },
          0
        )
        .to(
          ['#title-1', '#title-2'],
          {
            opacity: 0,
          },
          0
        )
        .to(
          '#title-3',
          {
            color: () => '#0f141a',
          },
          1
        )
        .to(
          '#title-3',
          {
            x: fsSmall,
            y: fsSmall,
            fontSize: fslarge,
          },
          1
        )
        .to(
          '#title__bar',
          {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 120%, 0% 120%)',
          },
          1
        );

      return () => ctx.revert(); // cleanup!
    });
  }, []);

  const headerTitle = title.toUpperCase();

  return (
    <>
      <div id="header_container" className={styles['header-container']}>
        <div id="title__bar" className={styles['title__bar__wrapper']}>
          <h1>{headerTitle}</h1>
        </div>
        <h1 className={styles['header-title']}>
          <div id="title-1" aria-hidden="true">
            {headerTitle}
          </div>
          <div id="title-2" aria-hidden="true">
            {headerTitle}
          </div>
          <div id="title-3" aria-hidden="true">
            {headerTitle}
          </div>
        </h1>
      </div>
      <div
        className={`${styles['header__bottom__spacer']}`}
        ref={contentRef}
      ></div>
    </>
  );
}

export default HomeHeader;
