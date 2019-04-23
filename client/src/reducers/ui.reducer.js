import { fromJS } from 'immutable';

import ui from './ui';
import { setLoading } from '../actions'

describe('uiReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      loading: false
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(ui(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loading action correctly', () => {
    const loading = true;
    const expectedResult = state.set('loading', loading);
    expect(ui(state, setLoading(loading))).toEqual(expectedResult);
  });
});
