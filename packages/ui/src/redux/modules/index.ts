import { combineReducers } from 'redux';

import list, { IListState } from './list';
import user, { IUserState } from './user';

export interface IState {
    user: IUserState,
    list: IListState,
}

const rootReducer = combineReducers<IState>({
    list,
    user,
});

export default rootReducer;
