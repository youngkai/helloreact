import { CHANGE_INPUT_VALUE, ADD_ITEM, DEL_ITEM } from './actionTypes';

const defaultState = {
    'inputValue': '',
    'list': []
};

export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    if(action.type === CHANGE_INPUT_VALUE) {
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === ADD_ITEM) {
        newState.list.push(action.value);
        newState.inputValue = '';
        return newState;
    }
    if(action.type === DEL_ITEM) {
        newState.list.splice(action.value, 1);
        return newState;
    }
    return state;
}