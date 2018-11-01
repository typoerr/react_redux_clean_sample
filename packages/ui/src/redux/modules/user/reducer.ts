import { types } from './actions';

// TODO 適切な場所に移す
interface IAction {
    type: string,
    payload: any,
}

export interface IUserState {
    isGettingUser: boolean,
    id: string,
    name: string,
}
const initialState: IUserState = {
    id            : '',
    isGettingUser : false,
    name          : 'あなた',
};

const reducers = {
    [types.START_GET_USER]: (state: IUserState) => ({
        ...state,
        isGettingUser : true,
    }),
    [types.SET_USER]: (state: IUserState, action: IAction) => ({
        ...state,
        id            : action.payload.id,
        isGettingUser : false,
        name          : action.payload.name,
    }),
};

export default (state: IUserState = initialState, action: IAction) => (
    (reducers[action.type] && reducers[action.type](state, action)) || state
);
