const initialState = {
  size: 128,
  text: {
    fontSize: 36,
    fontFamliy: 'Calibri',
    value: 'FG',
    color: 'red',
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    // Your cases here

    default:
      return state;
  }
};

export default mainReducer;
