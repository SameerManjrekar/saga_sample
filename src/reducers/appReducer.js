import { initialState } from '../initialState';
import { handleActions } from 'redux-actions';
import testReducers from './testReducer';

const sameer = handleActions({
    ...testReducers
}, initialState);

export default sameer;
