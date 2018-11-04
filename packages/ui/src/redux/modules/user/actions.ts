import { Dispatch }    from 'redux';
import { user }        from 'sample-core';

const prefix = '@user';
export const types = {
    SET_USER       : `${prefix}/SET_USER`,
    START_GET_USER : `${prefix}/START_GET_USER`,
};

const actions: any = {};

actions.startGettingUser = () => ({
    type : types.START_GET_USER,
});

actions.getUser = () => async (dispatch: Dispatch) => {
    dispatch(actions.startGettingUser());

    const res: user.IOutGetUser = await user.getUser();

    if (!res.success) {
        return; // システムエラー的な
    }

    dispatch({
        payload : res.result,
        type    : types.SET_USER,
    });
};

actions.setName = (name: string) => ({
    payload : name,
    type    : types.SET_USER,
});

export default actions;