import { LOAD } from '../constants';

const loaded = true;

const loadReducer = (state = loaded, action) => {
  switch (action.type) {
    case LOAD:
      return true;

    default:
      return state;
  }
};

export default loadReducer;
