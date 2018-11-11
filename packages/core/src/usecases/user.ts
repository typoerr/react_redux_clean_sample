import { IUserEntity } from '../entities/user';
import userRepository  from '../repositories/user';
import { IOutBase }    from './common';

export interface IOutGetUser extends IOutBase {
    result : IUserEntity,
}

// Note: 一旦interfaceを持つところまで
//       DIでRepositoryを挿入できたらなお良し
export interface IUserRepository {
    get: () => Promise<IUserEntity>,
};

export const getUser = async (): Promise<IOutGetUser> => {
    const user = await userRepository.get();

    // TODO エラー処理
    return Promise.resolve({
        result  : user,
        success : true,
    });
};