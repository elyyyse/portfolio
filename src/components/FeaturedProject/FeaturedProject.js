// THIS COMPONENT HAS BEEN DEPRECATED - USE ProjectGalleryTile AND TAG WITH featured ATTRIBUTE

import React from 'react';
import Image from 'next/image';

function FeaturedProject({ title, children, imageSrc, altText }) {
  return (
    <div>
      <div className={`${styles.imageWrapper} globalColor`}>
        <Image src={imageSrc} alt={altText} width={648} height={216} />
      </div>
      <div className={styles.textWrapper}>
        <h3 className={styles.projectTitle}>{title}</h3>
        <p className={styles.projectBlurb}>{children}</p>
      </div>
    </div>
  );
}

export default FeaturedProject;
