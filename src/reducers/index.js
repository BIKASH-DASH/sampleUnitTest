import {SET_STACK} from '../actions'

function stacks(initialState={},action){
    switch (action.type) {
        case SET_STACK:
            return action.payload;
            break;
    
        default:
            return initialState;
            break;
    }
    
}

export default stacks;