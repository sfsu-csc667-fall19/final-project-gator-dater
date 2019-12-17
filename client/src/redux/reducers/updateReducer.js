const INITIAL_STATE ={
    age: '',
    email: '',
    gender: '',
    collegeYear: '',
    major: '',
    addtion: '',
    interests: '',
};

const updateReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SET_AGE':
            return{
                ...state,
                age: action.age,
            };
        case 'SET_EMAIL':
            return {
                ...state,
                email: action.email,
            };
        case 'SET_GENDER':
            return {
                ...state,
                gender: action.gender,
            };
        case 'SET_COLLEGE_YEAR':
            return {
                ...state,
                collegeYear: action.collegeYear,
            };
        case 'SET_MAJOR':
            return {
                ...state,
                major: action.major,
            };
        case 'SET_ADDTION':
            return {
                ...state,
                addtion: action.addtion,
            };
        case 'SET_INTERESTS':
            return {
                ...state,
                interests: action.interests,
            };
        default:
            return state;
    }
};

export default updateReducer;