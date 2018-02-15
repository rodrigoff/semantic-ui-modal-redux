const defaultState = null;

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case "MODAL_OPEN": {
      return { modalProps: action.payload };
    }

    case "MODAL_CLOSE": {
      return null;
    }

    default:
      return state;
  }
};
