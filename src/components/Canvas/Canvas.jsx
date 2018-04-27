import React from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';
import WebfontLoader from '@dr-kobros/react-webfont-loader';
import { Button } from 'react-uwp';
import { GoogleFonts } from '../../assets';
import './CanvasStyles.less';

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      config: {
        google: {
          families: GoogleFonts,
        },
      },
    };
  }
  handleDownload = () => {
    this.downloadButton.href = this.stage.getStage().toDataURL();
  };
  handleLoad = (status) => {
    if (status === 'active') {
      this.setState({ loaded: true });
      this.props.load();
    }
  };
  render() {
    const {
      fontSize, fontFamily, value, color, textWidth,
    } = this.props.settings.text;
    const { size, backgroundColor } = this.props.settings;
    const textHeight = this.textNode ? this.textNode.textHeight : fontSize;
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
            <WebfontLoader config={this.state.config} onStatus={this.handleLoad}>
              <React.Fragment>
                {this.state.loaded && (
                  <Text
                    ref={(node) => {
                      this.textNode = node;
                    }}
                    offsetY={textHeight / 2}
                    offsetX={textWidth / 2}
                    x={size / 2}
                    y={size / 2}
                    fill={color}
                    fontSize={parseInt(fontSize, 10)}
                    fontFamily={fontFamily}
                    text={value}
                  />
                )}
              </React.Fragment>
            </WebfontLoader>
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
