import * as Redux from 'redux';
import thunk from 'redux-thunk';
import { Dispatch, RootState } from './utils/redux';
import { appReducer, stateKey as appStateKey } from './states/app';
/**
 * COmbine all reducer with root state and middleware and create a store
 * tp pass to provider
 * 
 * Each key in the Root State object should map to the stateKey value for each reducer.
 * 
 * ROotState is the single source of truth
 */
const rootReducer = Redux.combineReducers<RootState>({
    [appStateKey]: appReducer
});

// debugger;

export interface Store extends Redux.Store<RootState> {
    dispatch: Dispatch;
}

export default (initialState = {}) => {
    const middleWare = Redux.applyMiddleware(thunk);
    return Redux.createStore<RootState>(rootReducer, initialState as RootState, middleWare);
};