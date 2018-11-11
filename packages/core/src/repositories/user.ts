import 'isomorphic-fetch';

import User                from '../entities/user';
import { IUserRepository } from '../usecases/user';

const userRepository: IUserRepository = {
    // TODO エラー処理
    get : () => fetch('http://localhost:3002/user/get')
        .then(res => res.json())
        .then(json =>
            new User({
                id  : json.result.userId,
                name: json.result.userName,
            })
        ),
};

export default userRepository;