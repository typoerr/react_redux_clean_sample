import { Dispatch } from 'redux';

const prefix = '@user';

export const types = {
    SET_USER       : `${prefix}/SET_USER`,
    START_GET_USER : `${prefix}/START_GET_USER`,
};

const actions: any = {};

// TODO usecaseで定義する ----------
interface IUser {
    result : {
        id   : string,
        name : string,
    }
}
interface IGetUserResult {
    success : boolean,
    json    : () => Promise<IUser>
}
// --------------------------------

actions.startGettingUser = () => ({
    type : types.START_GET_USER,
});

actions.getUser = () => async (dispatch: Dispatch) => {
    dispatch(actions.startGettingUser());

    // TODO usecaseでユーザー情報を取得 ---
    const res: IGetUserResult = {
        json    : () => new Promise(resolve => {
            setTimeout(
                () => resolve({ result : { id : '12345', name : 'まいける' } }),
                2500,
            );
        }),
        success : true,
    };
    // ---------------------------------

    if (!res.success) {
        return; // システムエラー的な
    }

    const json = await res.json();
    dispatch({
        payload : {
            id   : json.result.id,
            name : json.result.name,
        },
        type    : types.SET_USER,
    });
};

actions.setName = (name: string) => ({
    payload : name,
    type    : types.SET_USER,
});

export default actions;