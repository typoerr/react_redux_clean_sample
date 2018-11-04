import User, { IUserEntity } from '../entities/user';
import { IOutBase }          from './common';

export interface IOutGetUser extends IOutBase {
    result : IUserEntity,
}

export const getUser = (): Promise<IOutGetUser> => {
    // TODO リポジトリ経由でAPIを叩く
    return new Promise(resolve => (
        setTimeout(resolve,1500,{
            result  : new User({ id : '12345', name : 'まいける' }),
            success : true,
        })
    ));
};