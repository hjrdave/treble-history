/*
  buildHistoryReducer
  Consumes treble store and dynamically builds global state reducer.
*/

const buildHistoryReducer: any = (store: any) => {

  let Reducer: any = (state: any, action: any) => {

    let reducerActions: any = {};

    store.map((storeItem:any) => {
      let objectProp = Object.keys(storeItem.state)[0];
      let dispatchValue = action[storeItem.action];
      reducerActions = {
        ...reducerActions,
        [storeItem.action]: () => {
          return {
            ...state,
            [objectProp]: dispatchValue
          };
        }
      }
    });
    return reducerActions[action.type];
  };
  
  return Reducer;
}
export default buildHistoryReducer;
