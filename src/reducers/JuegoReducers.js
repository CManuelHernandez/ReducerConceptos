export const JuegoReducers = (state = [], action) => {
  switch (action.type) {
    case "crear":
      return [...state, action.payload];

    default:
      return state;
  }
};
