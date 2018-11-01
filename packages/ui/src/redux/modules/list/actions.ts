import { Dispatch } from 'redux';

import { IState }   from 'src/redux/modules';

const prefix = '@list';
export const types = {
    SET_LIST : `${prefix}/SET_LIST`,
};

const actions: any = {};

actions.getList = () => (dispatch: Dispatch, getState: () => IState) => {
    // TODO usecaseを叩いてlistを取ってくる
    const userId = getState().user.id; // リクエストパラメーターのつもり
    console.warn(`throw ${userId}`);
    const list = ['hoge', 'fuga'];

    dispatch({
        payload : list,
        type    : types.SET_LIST,
    });
};

export default actions;