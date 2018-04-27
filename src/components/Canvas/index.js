import { connect } from 'react-redux';
import Canvas from './Canvas';
import { load } from '../../actions';

const mapStateToProps = ({ mainReducer }) => ({
  settings: mainReducer,
});

const mapDispatchToProps = dispatch => ({
  load: () => dispatch(load()),
});

const CanvasContainer = connect(mapStateToProps, mapDispatchToProps)(Canvas);

export default CanvasContainer;
