const INITIAL_STATE = {
    username: '',
    password: '',
    isLoggedIn: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_IS_LOGGED_IN':
            return {
                ...state,
                isLoggedIn: action.isLoggedIn,
            };
        case 'SET_USERNAME':
            return {
                ...state,
                username: action.username,
            };
        case 'SET_PASSWORD':
            return {
                ...state,
                password: action.password,
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        case 'SET_AGE':
            return {
                ...state,
                age: action.age,
            };
        case 'SET_EMAIL':
            return {
                ...state,
                email: action.email,
            };
        case 'SET_MAJOR':
            return {
                ...state,
                major: action.major,
            };

        case 'SET_COLLEGE_YEAR':
            return {
                ...state,
                major:action.collegeYearm
            };
        case 'SET_FIRSTNAME':
            return {
                ...state,
                firstName: action.firstName,
            };
        case 'SET_LASTNAME':
            return {
                ...state,
                lastName: action.lastName,
            };
        case 'SET_INFO':
            return {
                ...state,
                info: action.info,
            };

        case 'SET_PREFERENCE':
            return {
                ...state,
                preference: action.preference,
            };
        case 'SET_IDENTITY':
            return {
                ...state,
                identity: action.identity,
            };

        case 'SET_LISTED':
            return {
                ...state,
                listed: action.listed,
            };
        default:
            return state;
    }
};

export default userReducer;