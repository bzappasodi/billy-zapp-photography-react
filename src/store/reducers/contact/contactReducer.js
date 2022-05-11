import * as actionTypes from '../../actions/actionType';
const initialState = {name: '', email: '', comments: ''};

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CONTACT_FORM_ACTIONS_TYPES.SUBMIT_CONTACT_FORM:
            return {
                ...state,
                name: action.name,
                email: action.email,
                comments: action.comments
            };
        default: return state;

    }

};
export default contactReducer;
