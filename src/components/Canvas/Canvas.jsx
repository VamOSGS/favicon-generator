import React from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';
import './CanvasStyles.less';

class Canvas extends React.Component {
  render() {
    const {
      fontSize, fontFamily, value, color,
    } = this.props.settings.text;
    const { size } = this.props.settings;
    console.log(this.textNode !== undefined ? this.textNode.textWidth : '');
    return (
      <div className="Canvas">
        <Stage width={size} height={size}>
          <Layer>
            <Text
              ref={(node) => {
                this.textNode = node;
              }}
              offsetX={(this.textNode ? this.textNode.textWidth : 22) / 2}
              offsetY={(this.textNode ? this.textNode.textHeight : 36) / 2}
              x={size / 2}
              y={size / 2}
              fill={color}
              fontSize={fontSize}
              fontFamily={fontFamily}
              text={value}
            />
          </Layer>
        </Stage>
      </div>
    );
  }
}

export default Canvas;
