import { createSelector } from 'reselect';

/**
 * Direct selector to the appComponent state domain
 */
const selectAppComponentDomain = (state) => state.get('appComponent');

/**
 * Other specific selectors
 */


/**
 * Default selector used by AppComponent
 */

const makeSelectAppComponent = () => createSelector(
  selectAppComponentDomain,
  (substate) => substate.toJS()
);

export default makeSelectAppComponent;
export {
  selectAppComponentDomain,
};
