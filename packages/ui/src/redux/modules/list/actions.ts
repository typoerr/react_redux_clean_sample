import { Dispatch } from 'redux';
import { todo }     from 'sample-core';

import { IState }   from 'src/redux/modules';

const prefix = '@list';
export const types = {
    SET_LIST            : `${prefix}/SET_LIST`,
    START_GET_TODO_LIST : `${prefix}/START_GET_TODO_LIST`,
};

const actions: any = {};

actions.startGettingTodoList = () => ({
    type : types.START_GET_TODO_LIST,
});

actions.getList = () => async (dispatch: Dispatch, getState: () => IState) => {
    dispatch(actions.startGettingTodoList());

    const id  = getState().user.id;
    const res = await todo.getList({ id });

    if (!res.success) {
        return; // システムエラー的な
    }

    dispatch({
        payload : res.result.list,
        type    : types.SET_LIST,
    });
};

export default actions;