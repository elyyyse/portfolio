import React from 'react';
import { usePathname } from 'next/navigation';

import { PROJECT_DETAILS } from '@/constants';
import { generateRandomProject } from '@/helpers';

function useRandomProjectPath() {
  const [slug, setSlug] = React.useState('');
  const { abstracts } = PROJECT_DETAILS;

  const pathname = usePathname();

  React.useEffect(() => {
    let projectPath = generateRandomProject(abstracts);
    while (projectPath === pathname || projectPath === '') {
      projectPath = generateRandomProject(abstracts);
      if (projectPath !== pathname && projectPath !== '') setSlug(projectPath);
    }
    if (projectPath !== pathname && projectPath !== '') setSlug(projectPath);
  }, [abstracts, pathname]);

  return slug;
}

export default useRandomProjectPath;
