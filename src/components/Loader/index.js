import { connect } from 'react-redux';
import Loader from './Loader';

const mapStateToProps = ({ loadReducer }) => ({
  loaded: loadReducer,
});

const LoaderContainer = connect(mapStateToProps)(Loader);

export default LoaderContainer;
