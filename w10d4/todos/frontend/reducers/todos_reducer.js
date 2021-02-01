import { RECEIVE_TODO, RECEIVE_TODOS } from "../actions/todo_actions";

const todosReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = {}
    switch (action.type) {
    case RECEIVE_TODOS:
        action.todos.forEach(todo => {
            nextState[todo.id] = todo
        })
        return nextState;
    case RECEIVE_TODO:
        return Object.assign({}, state, {[action.todo.id]: todo})
    default:
        return state;
    }
};

export default todosReducer;
