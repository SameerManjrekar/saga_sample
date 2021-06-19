import * as TestActionConstants from '../constants/test';

function handleGetSuccess(state, action) {
    debugger;
    // Update the state from the action test object properties
    // return {
    //     ...state,
    //     test: {
    //         ...state.test, testGrid: action.testObject
    //     }
    // };
    return { ...state, test: { ...state.test, testGrid: action.testObject } };
}

const testReducer = {
    [TestActionConstants.TEST_GET_SUCCESS]: (state, action) => handleGetSuccess(state, action)
}

export default testReducer;