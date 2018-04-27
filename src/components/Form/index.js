import { connect } from 'react-redux';
import Form from './Form';
import { update, updateBackground } from '../../actions';

const mapStateToProps = ({ mainReducer }) => ({
  settings: mainReducer,
});

const mapDispatchToProps = dispatch => ({
  updateText: (params, type) => dispatch(update(params, type)),
  updateBackground: params => dispatch(updateBackground(params)),
});

const FormContainer = connect(mapStateToProps, mapDispatchToProps)(Form);

export default FormContainer;
