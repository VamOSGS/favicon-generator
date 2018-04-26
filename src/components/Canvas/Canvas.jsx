import React from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';
import { Button, Icon } from 'react-uwp';
import './CanvasStyles.less';

class Canvas extends React.Component {
  handleDownload = () => {
    this.downloadButton.href = this.stage.getStage().toDataURL();
  };
  render() {
    const {
      fontSize, fontFamily, value, color,
    } = this.props.settings.text;
    const { size, backgroundColor } = this.props.settings;
    return (
      <div className="Canvas">
        <Stage
          ref={(node) => {
            this.stage = node;
          }}
          width={size}
          height={size}
        >
          <Layer>
            <Rect x={0} y={0} width={size} height={size} fill={backgroundColor} />
            <Text
              ref={(node) => {
                this.textNode = node;
              }}
              offsetX={(this.textNode ? this.textNode.textWidth : 44) / 2}
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
        <div className="download">
          <a href="/download" ref={node => (this.downloadButton = node)} download="favicon.ico">
            <Button icon="Download" iconPosition="right" onClick={this.handleDownload}>
              Download
            </Button>
          </a>
        </div>
      </div>
    );
  }
}

export default Canvas;
