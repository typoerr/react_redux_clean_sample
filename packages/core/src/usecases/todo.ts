import todoRepository from '../repositories/todo';
import { IOutBase }   from './common';

export interface ITodoList {
    list: string[],
}

export interface IInGetTodoList {
    id: string,
}

export interface IOutGetTodoList extends IOutBase {
    result : ITodoList,
}

export interface ITodoRepository {
    get: (id: string) => ITodoList,
}

export const getList = (params: IInGetTodoList): Promise<IOutGetTodoList> => {
    const res = todoRepository.get(params.id);
    return Promise.resolve({
        result  : res,
        success : true,
    });
};