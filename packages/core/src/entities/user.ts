export interface IUser {
    id: string,
    name: string,
    nickName?: string
}

interface IUserEntity {
    id: string,
    name: string,
    toObject: () => IUser,
}

/**
 * ユーザー
 */
export default class User implements IUserEntity {
    public readonly id: string;
    public readonly name: string;

    constructor(props: IUser) {
        this.id = props.id;
        this.name = props.name;
    }

    public toObject(): IUser {
        return {
            id: this.id,
            name: this.name,
            nickName: this.getNickName(),
        }
    }

    // ビジネスロジック的な加工をするときはここ

    private getNickName() {
        return `${this.id}${this.name}`; // <-適当
    }
}