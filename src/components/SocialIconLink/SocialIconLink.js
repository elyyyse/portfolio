'use client';
import React from 'react';
import { GitHub, Linkedin } from 'react-feather';
import Link from 'next/link';

import styles from './SocialIconLink.module.css';

import VisuallyHidden from '../VisuallyHidden';

function SocialIconLink({ platform }) {
  const [platformContent, setPlatformContent] = React.useState({
    icon: null,
    href: '',
  });

  React.useEffect(() => {
    if (platform === 'Linkedin') {
      setPlatformContent({
        icon: <Linkedin />,
        href: 'https://www.linkedin.com/in/elysekanagaratnam/',
      });
    } else if (platform === 'GitHub') {
      setPlatformContent({
        icon: <GitHub />,
        href: 'https://github.com/elyyyse',
      });
    }
  }, [platform]);

  return (
    <Link className={styles.link} href={platformContent.href} target='_blank'>
      <span className={styles.icon}>{platformContent.icon}</span>
      <VisuallyHidden>{platform}</VisuallyHidden>
    </Link>
  );
}

export default SocialIconLink;
