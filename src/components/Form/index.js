import { connect } from 'react-redux';
import Form from './Form';
import { updateValue } from '../../actions';

const mapStateToProps = ({ mainReducer }) => ({
  settings: mainReducer,
});

const mapDispatchToProps = dispatch => ({
  updateValue: params => dispatch(updateValue(params)),
});

const FormContainer = connect(mapStateToProps, mapDispatchToProps)(Form);

export default FormContainer;
