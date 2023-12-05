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
// const RAINBOW_COLORS_HALF_OPACITY = [
//   'rgba(207, 75, 74, 0.5)',
//   'rgba(235, 175, 65, 0.5)',
//   'rgba(235, 218, 65, 0.5)',
//   'rgba(72, 165, 106, 0.5)',
//   'rgba(102, 136, 196, 0.5)',
//   'rgba(178, 93, 166, 0.5)',
// ];

let prevMousePositions = [];
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
  prevMousePositions.push(relativeMousePos);

  ctx.clearRect(0, 0, width, height);

  for (let i = 0; i < prevMousePositions.length; i++) {
    range(numColors).map(colorIndex => {
      const xOffset = (width / numColors) * colorIndex;
      for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
        for (let colIndex = 0; colIndex < numCols; colIndex++) {
          let x =
            normalize(colIndex, 0, numCols, 0, width / numColors) + xOffset;
          let y = normalize(rowIndex, 0, numRows, 0, height) + 5;

          const deltaX = Math.abs(x - prevMousePositions[i].x);
          const deltaY = Math.abs(y - prevMousePositions[i].y);
          const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

          const maxDistFromCursor = 50;
          const maxRadius = 20;
          const radiusMultipler = normalize(i, 0, 29, 0, 3);

          let radius =
            normalize(distance, 0, maxDistFromCursor, maxRadius, 1) *
            radiusMultipler;
          radius = clamp(radius, 0, width);

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, 2 * Math.PI);
          ctx.fillStyle = RAINBOW_COLORS[colorIndex];
          ctx.fill();
        }
      }
    });
    if (prevMousePositions.length > 30) {
      prevMousePositions = prevMousePositions.slice(1);
    }
  }
}

function Hero({ className, numColors = 6, ...delegated }) {
  const width = typeof window === 'undefined' ? 1000 : window.innerWidth;
  const height = 475;
  const numRows = 32;
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
