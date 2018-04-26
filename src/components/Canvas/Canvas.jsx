import React from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';
import { Button } from 'react-uwp';
import './CanvasStyles.less';

class Canvas extends React.Component {
  handle = () => {
    this.downloadButton.href = this.stage.getStage().toDataURL();
  };
  render() {
    const {
      fontSize, fontFamily, value, color,
    } = this.props.settings.text;
    const { size } = this.props.settings;
    console.log(this.textNode !== undefined ? this.textNode.textWidth : '');
    return (
      <div className="Canvas">
        {/* eslint-disable */}
        <a ref={node => (this.downloadButton = node)} onClick={this.handle} download="favicon.png">
          <Button>Download</Button>
        </a>
        {/* eslint-enable */}

        <Stage
          ref={(node) => {
            this.stage = node;
          }}
          width={size}
          height={size}
        >
          <Layer>
            <Text
              ref={(node) => {
                this.textNode = node;
              }}
              offsetX={(this.textNode ? this.textNode.textWidth : 22) / 2}
              offsetY={(this.textNode ? this.textNode.textHeight : fontSize) / 2}
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
