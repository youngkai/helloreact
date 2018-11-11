import { ADD_ITEM, CHANGE_INPUT_VALUE, DEL_ITEM } from "./actionTypes";

export const getInputValue = (value) => ({
    'type': CHANGE_INPUT_VALUE,
    'value': value
});

export const handleDelAction = (index) => ({
    'type': DEL_ITEM,
    'value': index
});

export const handleClickAction = (value) => ({
    'type': ADD_ITEM,
    'value': value
});