import { ITodoRepository } from '../usecases/todo';

const KEY = 'todoList';

const getStorage = () => {
    if (!window || !window.sessionStorage) {
        throw new Error('no sessionStorage');
    }

    return window.sessionStorage;
};

const TodoRepository: ITodoRepository = {
    get : (id: string) => {
        const storage = getStorage();
        const item = storage.getItem(`${KEY}_${id}`);
        if (!item) {
            return {
                list : ['何か入れてね'],
            };
        }

        return {
            list : JSON.parse(item),
        };
    },
};

export default TodoRepository;