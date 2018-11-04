import User, { IUser }    from '../entities/user';
import { IOutBase } from './common';

export interface IOutGetUser extends IOutBase {
    result : IUser,
}

export const getUser = (): Promise<IOutGetUser> => new Promise(resolve => (
    setTimeout(resolve,1500,{
        result  : (new User({ id : '12345', name : 'まいける' })).toObject(),
        success : true,
    })
));