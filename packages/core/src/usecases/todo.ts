import { IOutBase }  from './common';

export interface ITodoList {
    list: string[],
}

export interface IInGetTodoList {
    id: string,
}

export interface IOutGetTodoList extends IOutBase {
    result : ITodoList,
}

export const getList = (params: IInGetTodoList): Promise<IOutGetTodoList> => new Promise(resolve => (
    setTimeout(resolve,1500,{
        result  : {
            list : ['hoge', 'fuga'],
        },
        success : true,
    })
));