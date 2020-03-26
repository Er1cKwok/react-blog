export const add = () => ({type: 'add'});
export const minus = () => ({type: 'minus'});
export const asyncAdd = () => dispatch => {
  setTimeout(() => {
    dispatch({type: 'add'})
  }, 1000)
};
export const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'add':
      return state + 1;
    case 'minus':
      return state - 1;
    default:
      return state;
  }
};