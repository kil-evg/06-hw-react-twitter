import { CHANGE_STATS } from "../actions/statsAction";

//Type state = {
//     followers: number,
//     following: number
// }

export const statsReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_STATS:
            let res = state[action.payload.statsType] + action.payload.sum;
            res = res < 0 ? 0 : res;
            return { ...state, [action.payload.statsType]: res };
        default:
            return state;
    }
}