import { CHANGE_AVATAR, CHANGE_NAME } from "../actions/userAction";

//Type state = {
//     name: string,
//     avatar: string
// },

export const userReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_NAME:
            return { ...state, name: action.payload || state.name };
        case CHANGE_AVATAR:
            return { ...state, avatar: action.payload || state.avatar };
        default:
            return state;
    }
}