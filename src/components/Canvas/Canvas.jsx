import React from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';
import './CanvasStyles.less';

const Canvas = ({ settings }) => {
  const {
    fontSize, fontFamily, value, color,
  } = settings.text;
  const { size } = settings;
  return (
    <div className="Canvas">
      <Stage width={size} height={size}>
        <Layer>
          <Text
            x={size / 2}
            y={size / 2}
            offset="center"
            fill={color}
            fontSize={fontSize}
            fontFamily={fontFamily}
            text={value}
            draggable
          />
        </Layer>
      </Stage>
    </div>
  );
};

export default Canvas;
