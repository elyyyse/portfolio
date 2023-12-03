import React from 'react';
import Script from 'next/script';
import styles from './Video.module.css';

function Video({ videoSrc, title }) {
  return (
    <>
      <div
        className={styles.video}
        style={{ padding: '50% 0 0 0', position: 'relative' }}
      >
        <iframe
          className={styles.iframe}
          src={videoSrc}
          allow='autoplay; fullscreen; picture-in-picture'
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
          }}
          title={title}
        ></iframe>
      </div>
      <Script src='https://player.vimeo.com/api/player.js' defer />
    </>
  );
}

export default Video;
