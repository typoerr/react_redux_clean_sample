import { types } from './actions';

// TODO 適切な場所に移す
interface IAction {
    type: string,
    payload: any,
}

export interface IListState {
    isGettingTodoList: boolean,
    list: Array<string|null>,
}
const initialState: IListState = {
    isGettingTodoList : false,
    list              : [],
};

const reducers = {
    [types.START_GET_TODO_LIST]: (state: IListState) => ({
        ...state,
        isGettingTodoList : true,
    }),
    [types.SET_LIST]: (state: IListState, action: IAction) => ({
        ...state,
        isGettingTodoList : false,
        list              : [...action.payload],
    }),
};

export default (state: IListState = initialState, action: IAction) => (
    (reducers[action.type] && reducers[action.type](state, action)) || state
);
