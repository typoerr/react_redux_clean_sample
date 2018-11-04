interface IInUser {
    id: string,
    name: string,
}

export interface IUserEntity {
    id: string,
    name: string,
    getNickName: () => string,
}

/**
 * ユーザー
 */
export default class User implements IUserEntity {
    public readonly id: string;
    public readonly name: string;

    constructor(props: IInUser) {
        this.id   = props.id;
        this.name = props.name;
    }

    // ビジネスロジック的な加工をするときはここ
    // 副作用を起こすメソッドは作らない

    public getNickName() {
        return `${this.id}${this.name}`; // <-適当
    }
}