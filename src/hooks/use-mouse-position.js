import React from 'react';

function useMousePosition() {
  const [mousePosition, setMousePosition] = React.useState(null);

  const getMousePosition = React.useCallback(e => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  React.useEffect(() => {
    window.addEventListener('mousemove', getMousePosition);

    return () => {
      window.removeEventListener('mousemove', getMousePosition);
    };
  }, [getMousePosition]);

  return mousePosition;
}

export default useMousePosition;
