import React from 'react';

function useCanvas(width, height) {
  const canvasRef = React.useRef(null);
  const [canvasBox, setCanvasBox] = React.useState(null);
  const [ctx, setCtx] = React.useState(null);

  const pixelRatio =
    typeof window === 'undefined' ? 1 : window.devicePixelRatio;

  React.useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = width;
    canvas.height = height;
    setCanvasBox(canvas.getBoundingClientRect());
    setCtx(canvas.getContext('2d'));

    canvas.width = width * pixelRatio;
    canvas.height = height * pixelRatio;

    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
  }, [width, height, pixelRatio]);

  React.useEffect(() => {
    if (ctx && width) {
      ctx.scale(pixelRatio, pixelRatio);
    }
  }, [ctx, width, pixelRatio]);

  return { canvasRef, canvasBox, ctx };
}

export default useCanvas;
