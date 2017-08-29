import combineReducers from '../tools/combineReducers';
import locationReducer from './location';

import auth from '../containers/Auth/reducer';
import app from '../containers/AppComponent/reducer';

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return;

  store.asyncReducers[key] = reducer; // eslint-disable-line
  store.replaceReducer(makeRootReducer(store.asyncReducers));
};

function makeRootReducer(asyncReducers) {
  console.log(asyncReducers);
  const rootReducer = combineReducers({
    location: locationReducer,
    auth,
    app,
    ...asyncReducers,
  });

  return (state, action) => {
    const newState = rootReducer(state, action);
    if (!state || !state.getIn) return newState;
    // const id = selectAppUserId(state);
    if (newState !== state) {
      // if(id){
      //   localStorage.setItem('$$current',id);
      //   localStorage.setItem('$$store['+id+']',JSON.stringify(newState));
      // }
    }

    return newState;
  };
}

export default makeRootReducer;
