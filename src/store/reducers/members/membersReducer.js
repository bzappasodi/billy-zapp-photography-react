import * as actionTypes from '../../actions/actionType';
const initialState = {name: '', email: '', message: '', id: ''};

const membersReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.MEMBERS_ACTIONS_TYPES.ADD_MEMBERS_TO_STATE:
            return {
                ...state,
                membersResult: [action.payload],
            };
        default: return state;

    }

};
export default membersReducer;
