'use client';
import React from 'react';

import useMousePosition from '@/hooks/use-mouse-position';
import useCanvas from '@/hooks/use-canvas';
import { range, clamp, normalize } from '@/utilities';

import styles from './Hero.module.css';

const RAINBOW_COLORS = [
  '#CF4B4A',
  '#EBAF41',
  '#ebda41',
  '#48A56A',
  '#6688C4',
  '#B25DA6',
];

function draw(
  mousePosition,
  canvasBox,
  width,
  height,
  numRows,
  numCols,
  numColors,
  ctx
) {
  const relativeMousePos = {
    x: mousePosition.x - canvasBox.left,
    y: mousePosition.y - canvasBox.top,
  };

  ctx.clearRect(0, 0, width, height);

  range(numColors).map(colorIndex => {
    const xOffset = (width / numColors) * colorIndex;
    for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
      for (let colIndex = 0; colIndex < numCols; colIndex++) {
        let x = normalize(colIndex, 0, numCols, 0, width / numColors) + xOffset;
        let y = normalize(rowIndex, 0, numRows, 0, height) + 5;

        const deltaX = Math.abs(x - relativeMousePos.x);
        const deltaY = Math.abs(y - relativeMousePos.y);
        const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
        const maxDistFromCursor = 75;
        const maxRadius = 100;
        let radius = normalize(distance, 0, maxDistFromCursor, maxRadius, 1);
        radius = clamp(radius, 0, width);

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fillStyle = RAINBOW_COLORS[colorIndex];
        ctx.fill();
        ctx.closePath();
      }
    }
  });
}

function Hero({ className, numColors = 6, ...delegated }) {
  const width = typeof window === 'undefined' ? 1000 : window.innerWidth;
  const height = 475;
  const numRows = 16;
  const numCols = 16;

  const { canvasRef, canvasBox, ctx } = useCanvas(width, height);
  const mousePos = useMousePosition();

  if (mousePos && canvasBox) {
    draw(mousePos, canvasBox, width, height, numRows, numCols, numColors, ctx);
  }

  return (
    <canvas
      {...delegated}
      ref={canvasRef}
      className={`${styles.canvas} ${className}`}
      role='presentation'
    ></canvas>
  );
}

export default Hero;
