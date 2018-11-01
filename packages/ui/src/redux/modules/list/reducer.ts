import { types } from './actions';

// TODO 適切な場所に移す
interface IAction {
    type: string,
    payload: any,
}

export interface IListState {
    list: Array<string|null>,
}
const initialState: IListState = {
    list : [],
};

const reducers = {
    [types.SET_LIST]: (state: IListState, action: IAction) => ({
        ...state,
        list : [...action.payload],
    }),
};

export default (state: IListState = initialState, action: IAction) => (
    (reducers[action.type] && reducers[action.type](state, action)) || state
);
