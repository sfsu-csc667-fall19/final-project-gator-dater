import axios from 'axios';

// hmmm....remember to import and actually use in profile/home
export const updateProfile = () => (dispatch, age, email, gender, collegeYear, major, addtion, interests) => {
    axios.post('/user/editProfile', {
        age: age,
        email: email,
        gender: gender,
        collegeYear: collegeYear,
        major: major,
        addtion: addtion
        //interests: interests
    })
        .then(({data}) => {console.log(data)})
        .catch(console.log)
};

export const setAge = age =>({ 
    type:'SET_AGE',
    age,
});

export const setEmail = email =>({ 
    type:'SET_EMAIL',
    email,
});

export const setGender = gender =>({ 
    type:'SET_GENDER',
    gender,
});

export const setCollegeYear = collegeYear =>({
    type:'SET_COLLEGE_YEAR',
    collegeYear,
});

export const setMajor = major => ({
    type: 'SET_MAJOR',
    major,
});

export const setAddtion = addtion => ({
    type: 'SET_ADDTION',
    addtion,
});

export const setInterests = interests => ({
    type: 'SET_INTERESTS',
    interests,
});