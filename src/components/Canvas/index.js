import { connect } from 'react-redux';
import Canvas from './Canvas';

const mapStateToProps = ({ mainReducer }) => ({
  settings: mainReducer,
});

const mapDispatchToProps = dispatch => ({});

const CanvasContainer = connect(mapStateToProps, mapDispatchToProps)(Canvas);

export default CanvasContainer;
