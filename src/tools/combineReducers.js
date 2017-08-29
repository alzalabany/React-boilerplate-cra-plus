import { fromJS } from 'immutable';

export default (config) => (state={}, action) => Object.entries(
  config).reduce((carry, reducer) => {
  const part = carry.get(reducer[0]);
  const newPart = reducer[1](part, action, carry, reducer[0]);

  return (newPart !== part) ? carry.set(reducer[0], newPart) : carry;
}, fromJS(state));
