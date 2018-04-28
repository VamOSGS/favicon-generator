import React from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';
import WebfontLoader from '@dr-kobros/react-webfont-loader';
import { Button } from 'react-uwp';
import { changeFavicon } from '../../utils';
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
  componentDidUpdate() {
    console.log(this.state.loaded)
    if (this.state.loaded === true) {
      changeFavicon(this.stage.getStage().toDataURL());
    }
  }
  handleDownload = () => {
    this.downloadButton.href = this.stage.getStage().toDataURL();
  };
  handleLoad = (status) => {
    if (status === 'active') {
      this.setState({ loaded: true });
      this.props.load();
      // changeFavicon(this.stage.getStage().toDataURL());
    }
  };
  render() {
    const {
      fontSize, fontFamily, value, color, textWidth,
    } = this.props.settings.text;
    const { size, backgroundColor, background } = this.props.settings;
    const { loaded, config } = this.state;
    return (
      <div className="Canvas">
        <Stage
          ref={(node) => {
            this.stage = node;
          }}
          width={size}
          height={size}
          onChange={() => console.log('FUCKA')}
        >
          <Layer>
            {background && <Rect x={0} y={0} width={size} height={size} fill={backgroundColor} />}
            <WebfontLoader config={config} onStatus={this.handleLoad}>
              <React.Fragment>
                {loaded && (
                  <Text
                    fill={color}
                    fontSize={parseInt(fontSize, 10)}
                    fontFamily={fontFamily}
                    text={value}
                    offsetY={fontSize / 2}
                    offsetX={textWidth / 2}
                    /* eslint-disable */
                    x={size / 2 - 2}
                    y={size / 2 + 2}
                    /* eslint-enable */
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
