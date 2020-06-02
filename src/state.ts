/*
  buildHistory
  Consumes the treble store and dynamically builds out the global state based off of store.state.
*/

interface IBuildHistory {
    (
      store: {
        action: string;
        state: {
            [key: string]: any;
        };
      }[]
    ): {
      [key: string]: any
    }
  }
  
  const buildHistory: IBuildHistory = (store) => {
  
   let state = {};
  
    store.map((obj) => {
      let stateName = Object.keys(obj.state).toString();
      // console.log(stateName);
      let historyState = {
        [stateName]: [obj.state[stateName]]
      }
        state = {...state, ...obj.state}
    });
  
    let newState = {
      ...state
    };
  
    return newState;
  }
  
    export default buildHistory;