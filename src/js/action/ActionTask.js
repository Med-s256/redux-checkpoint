import {ADD_TASK, DELETE_TASK, EDIT_TASK, COMPLETE_TASK} from '../const/ActionTypes'

export const add_task=(payload)=>{
    return {
        type: ADD_TASK,
        payload
    }
}
export const delete_task=(payload)=>{
    return {
        type: DELETE_TASK,
        payload
    }
}
export const edit_task=(payload)=>{
    return {
        type: EDIT_TASK,
        payload
    }
}
export const complete_task=(payload)=>{
    return {
        type: COMPLETE_TASK,
        payload
    }
}