'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'react-feather';

import useRandomProjectPath from '@/hooks/use-random-project-path';

import PlayableGif from '@/components/PlayableGif';
import Footnote from '@/components/Footnote';
import styles from './rainbow.module.css';

// export const metadata = {
//   title: 'Rainbow Canvas • Elyse Kanagaratnam',
// };

export default function RainbowCanvas() {
  const slug = useRandomProjectPath();

  return (
    <div className={styles.gridWrapper}>
      <Image
        priority
        className={styles.headerImg}
        src='/project-page/rainbow/rainbow-paint.jpg'
        alt=''
        width={3024}
        height={844}
      ></Image>
      <h1 className={styles.h1}>Interactive Rainbow Canvas</h1>
      <p className={`${styles.introBody} ${styles.p}`}>
        When I set out to build this portfolio site, I knew I wanted an
        interactive element as the homepage hero. Inspired by{' '}
        <Link href='https://www.joshwcomeau.com/' target='_blank'>
          Josh Comeau&apos;s metal shavings component on his blog
        </Link>
        , my initial idea was to mask a rainbow flag somehow and then reveal it
        on mouseover.
      </p>
      <Image
        className={styles.regImg}
        src='/project-page/rainbow/josh-metal-shavings.gif'
        alt=''
        width={706}
        height={450}
      ></Image>
      <p className={styles.p}>
        So naturally, I created an HTML canvas and drew a rainbow flag. Tada!
      </p>
      <Image
        className={styles.wideImg}
        src='/project-page/rainbow/rainbow-flag.jpg'
        alt=''
        width={3024}
        height={946}
      ></Image>
      <p className={styles.p}>
        The problem was, I wasn&apos;t sure how to implement the reveal. Not
        just technically, I mean I wasn&apos;t even sure what I wanted it to
        look like. I&apos;ve run into this problem a lot making videos. Like so
        many ideas, it felt fully formed until I really had to think about the
        execution. For me, the solution is almost always some form of
        storyboarding
        <Footnote>
          My favorite tools are and will forever be pen(cil) and paper.
        </Footnote>
        . I tried sketching out a few ideas, and in addition to noting a bunch
        of things I did not want to do (some of these are included down below,
        just for fun), I did figure out that I wanted the reveal to sort of
        trail the mouse.
      </p>
      <div className={styles.note}>
        <details className={`${styles.p} ${styles.aside}`}>
          <summary>
            <ChevronRight
              className={styles.chevronDown}
              size={16}
              // aria-hidden
            />
            A little aside on how I learn:
          </summary>
          <p>
            In a flurry of googling, I found Josh talking about the principles
            behind his design during a{' '}
            <Link
              href='https://www.youtube.com/watch?v=smkKv29iaZ8'
              target='_blank'
            >
              Frontend Horse charity livestream
            </Link>{' '}
            from a couple years ago. This was a great help&#8212;not only did it
            point me in the right direction, but when I looked closely, I was
            able to discern a bunch of hints about what my end product needed to
            look like. For example, you never see Josh&apos;s custom hooks, but
            you do see what they return. (Though in the case of his normalize( )
            utility function, I got lucky and was able to pause the video and
            steal it line for line.) These are my favorite kinds of resources
            because they keep me from spinning my wheels while still leaving me
            plenty to figure out on my own. It&apos;s how I learn best.
          </p>
        </details>
      </div>
      <Image
        className={styles.regImg}
        src='/project-page/rainbow/storyboard.jpeg'
        alt=''
        width={3970}
        height={2233}
      ></Image>
      <h2 className={styles.h2}>
        The toolkit
        <Footnote>
          I&apos;m about to gloss over a LOT of detail here, but if anything
          piques your interest, please do email me - elyse@hey.com - I&apos;d
          really love to hear from you!
        </Footnote>
      </h2>
      <p className={styles.note}>
        Note that I happened to build this in React, but the principles apply to
        other frameworks.
      </p>
      <ul className={styles.ul}>
        <li>A custom hook to return mouse position</li>
        <li>Another custom hook to set up your canvas—it returns:</li>
        <ul className={styles.ul}>
          <li>A ref to identify your canvas element</li>
          <li>
            A bounding box, so you can know when the mouse position overlaps the
            canvas
          </li>
          <li>
            A canvas context that scales based on pixel ratio, so your cool
            project looks good on retina displays
          </li>
        </ul>
        <li>A selection of dope colors</li>
      </ul>
      <h2 className={styles.h2}>The basic steps</h2>
      <ol className={`${styles.ol} ${styles.topOl}`}>
        <li>
          Draw a grid of dots and paint them your preferred colors. The initial
          draw takes four loops — I&apos;m looping over my color selection, the
          number of rows, and the number of columns I want to create (I&apos;ll
          get to the fourth loop in just a minute).
        </li>
        <li>
          You already know where the mouse is relative to the canvas, so now you
          can manipulate the radius of each dot based on mouse position.
        </li>
      </ol>
      <PlayableGif
        className={styles.gif}
        gifSrc='/project-page/rainbow/rainbow-dot-radius.gif'
        thumbnailSrc='/project-page/rainbow/rainbow-dot-radius.jpg'
        gifAltText='A rectangular grid of dots in the colors of the rainbow growing and shrinking as a mouse cursor moves'
        thumbnailAltText='A rectangular grid of dots in the colors of the rainbow'
        width={1096}
        height={346}
        border
      />
      <ol className={`${styles.ol} ${styles.bottomOl}`} start={3}>
        <li>
          Next you need to calculate the distance from the center of each dot to
          your cursor using the 🤗Pythagorean Theorem🤗. And that allows you to
          only affect dots that are a particular distance from the mouse.
        </li>
      </ol>
      <PlayableGif
        className={styles.gif}
        gifSrc='/project-page/rainbow/rainbow-flag-inverted.gif'
        thumbnailSrc='/project-page/rainbow/rainbow-flag-inverted.jpg'
        gifAltText='A white rectangle containing a moving cluster of colored dots'
        thumbnailAltText='A white rectangle containing a cluster of blue and purple dots'
        width={874}
        height={276}
        border
      />
      <ol className={`${styles.ol} ${styles.bottomOl}`} start={4}>
        <li>
          Now we&apos;re ready for that fourth loop. Wrapped around all the
          loops from step 1, I&apos;m looping over the most recent 30 mouse
          positions. That&apos;s where the drag comes from. I have a little
          multiplier to ensure the dots get smaller as the mouse moves away, and
          then I just fiddled with all the numbers until I achieved a sort of
          paint spatter effect.
        </li>
      </ol>
      <p className={styles.p}>
        And that&apos;s about the gist. I am pretty happy with where I landed,
        but as promised, here are some snapshots from the journey
        <Footnote>Pardon the low quality gifs</Footnote>.
      </p>

      <h2 className={styles.h2}>The coloring book</h2>
      <PlayableGif
        className={styles.gif}
        gifSrc='/project-page/rainbow/rainbow-coloring-book.gif'
        thumbnailSrc='/project-page/rainbow/rainbow-coloring-book.jpg'
        gifAltText='A mouse cursor coloring in a white rectangle with dots in the color of the rainbow'
        thumbnailAltText='A collection of dots in the color of the rainbow'
        width={754}
        height={236}
        border
      />

      <h2 className={styles.h2}>The blobby&trade;</h2>
      <PlayableGif
        className={styles.gif}
        gifSrc='/project-page/rainbow/rainbow-blob.gif'
        thumbnailSrc='/project-page/rainbow/rainbow-blob.jpg'
        gifAltText='A blobby shape that changes color as it moves across a white rectangle'
        thumbnailAltText='A green and blue blobby shape'
        width={642}
        height={202}
        border
      />

      <h2 className={styles.h2}>
        The spotlight?
        <Footnote>
          This one is especially silly&#8212;the whole point is to reveal the
          flag, not to hide little bits of it.
        </Footnote>
      </h2>
      <PlayableGif
        className={styles.gif}
        gifSrc='/project-page/rainbow/rainbow-flag-animated.gif'
        thumbnailSrc='/project-page/rainbow/rainbow-flag-animated.jpg'
        gifAltText='A rainbow flag that changes shape as a mouse cursor moves'
        thumbnailAltText='A warped rainbow flag'
        width={952}
        height={300}
        border
      />
      <span className={styles.nextProject}>
        <Link href={slug}>
          Check out another project
          <ChevronRight size={14} style={{ display: 'inline' }} />
        </Link>
      </span>
    </div>
  );
}
