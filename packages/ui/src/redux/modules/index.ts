import { combineReducers } from 'redux';

import listReducer, { IListState } from './list';
import userReducer, { IUserState } from './user';

export interface IState {
    listReducer: IListState,
    userReducer: IUserState,
}

const rootReducer = combineReducers<IState>({
    listReducer,
    userReducer,
});

export default rootReducer;
