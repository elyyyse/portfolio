'use client';
import React from 'react';
import { Suspense } from 'react';
import Image from 'next/image';
import { Play } from 'react-feather';

import styles from './PlayableGif.module.css';

function PlayableGif({
  gifSrc,
  thumbnailSrc,
  gifAltText,
  thumbnailAltText,
  width,
  height,
}) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  return (
    <Suspense>
      <div className={styles.wrapper}>
        {!isPlaying && (
          <button
            className={styles.button}
            onClick={() => {
              setIsPlaying(!isPlaying);
            }}
          >
            <Play size={60} className={styles.playBtn} />
            <Image
              className={styles.wideImg}
              src={thumbnailSrc}
              alt={thumbnailAltText}
              width={width}
              height={height}
            ></Image>
          </button>
        )}
        {isPlaying && (
          <button
            className={styles.button}
            onClick={() => {
              setIsPlaying(!isPlaying);
            }}
          >
            <Image
              className={styles.wideImg}
              src={gifSrc}
              alt={gifAltText}
              width={width}
              height={height}
            ></Image>
          </button>
        )}
      </div>
    </Suspense>
  );
}

export default PlayableGif;
