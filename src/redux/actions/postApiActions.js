import { POST_API_STARTED, POST_API_SUCCESS, POST_API_FAILURE } from "./actionTypes";
// these actions are called in the app...
export const postApiStarted = ()=>{
    return {
        type: POST_API_STARTED
    }
}

export const postApiSuccess = (data)=>{
    return {
        type: POST_API_SUCCESS,
        payload: data
    }
}

export const postApiFailure = (error)=>{
    return {
        type: POST_API_FAILURE,
        payload: error
    }
}