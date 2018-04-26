import { connect } from 'react-redux';
import Form from './Form';
import { updateText, updateBackground } from '../../actions';

const mapStateToProps = ({ mainReducer }) => ({
  settings: mainReducer,
});

const mapDispatchToProps = dispatch => ({
  updateText: params => dispatch(updateText(params)),
  updateBackground: params => dispatch(updateBackground(params)),
});

const FormContainer = connect(mapStateToProps, mapDispatchToProps)(Form);

export default FormContainer;
