// Type state = {
    // user: {
    //     name: string,
    //     avatar: string
    // },
    // stats: {
    //     followers: number,
    //     following: number
    // }
// }

import { CHANGE_STATS } from "../actions/statsAction";
import { CHANGE_AVATAR, CHANGE_NAME } from "../actions/userAction";
import { statsReducer } from "./statsReducer";
import { userReducer } from "./userReducer";

export const rootReducer = (state = state, action) => {
    // switch (action.type) {
    //     case CHANGE_AVATAR:
    //         return { ...state, user: { ...state.user, avatar: action.payload || state.user.avatar } }
    //     case CHANGE_NAME:
    //         return { ...state, user: { ...state.user, name: action.payload || state.user.name } }
    //     case CHANGE_STATS:
    //         let res = state.stats[action.payload.statsType] + action.payload.sum;
    //         res = res < 0 ? 0 : res;
    //         return { ...state, stats: { ...state.stats, [action.payload.statsType]: res } };
    //     default:
    //         return state;
    // }
    return {
        user: userReducer(state.user, action),
        stats: statsReducer(state.stats, action)
    }
}