import * as core from 'sample-core';

import { types } from './actions';

// TODO 適切な場所に移す
interface IAction {
    type: string,
    payload: any,
}

export interface IUserState {
    isGettingUser: boolean,
    user: core.IUserEntity,
}
const initialState: IUserState = {
    isGettingUser : false,
    user          : {} as core.IUserEntity,
};

const reducers = {
    [types.START_GET_USER]: (state: IUserState) => ({
        ...state,
        isGettingUser : true,
    }),
    [types.SET_USER]: (state: IUserState, action: IAction) => ({
        ...state,
        isGettingUser : false,
        user          : action.payload,
    }),
};

export default (state: IUserState = initialState, action: IAction) => (
    (reducers[action.type] && reducers[action.type](state, action)) || state
);
