import styles from '@assets/styles/home/home.module.css';
import utility from '@assets/styles/base/_utility.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useLayoutEffect } from 'react';

type HeaderProps = { title: string };

function HomeHeader({ title }: HeaderProps) {
  gsap.registerPlugin(ScrollTrigger);

  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const titleDiv = document.getElementById('title-1') as HTMLElement;
    const titleSpace = titleDiv?.offsetHeight || 100;

    console.log(titleSpace);

    const varSpace = getComputedStyle(titleDiv).getPropertyValue('font-size');

    const varSpaceAdj = Number(varSpace.slice(0, -2)) + 34;

    console.log(varSpaceAdj);

    let ctx = gsap.context(() => {
      let timeline = gsap.timeline({
        scrollTrigger: {
          trigger: contentRef.current,
          pin: true,
          start: 'top bottom',
          end: 'top top',
          scrub: 1,
          pinSpacing: false,
          invalidateOnRefresh: true,
          markers: true,
        },
      });

      timeline
        .fromTo(
          '#title-1',
          { y: () => titleSpace },
          {
            y: 24,
          },
          0
        )
        .fromTo(
          '#title-2',
          { y: () => titleSpace * 2 },
          {
            x: 5,
            y: 29,
          },
          0
        )
        .fromTo(
          '#title-3',
          { y: () => titleSpace * 3 },
          {
            x: 10,
            y: 34,
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
          0
        );

      return () => ctx.revert(); // cleanup!
    });
  }, []);

  const headerTitle = title.toUpperCase();

  return (
    <>
      <div id="header_container" className={styles['header-container']}>
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
      <div className={`${utility['__full_height']}`} ref={contentRef}></div>
    </>
  );
}

export default HomeHeader;
