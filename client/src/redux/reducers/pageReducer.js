const INITIAL_STATE ={
    isUpdateOpen: false,
};

const pageReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SET_IS_UPDATEPAGE':
            return{
                ...state,
                isUpdateOpen: action.isUpdateOpen,
            };
        default:
            return state;
    }
};

export default pageReducer;