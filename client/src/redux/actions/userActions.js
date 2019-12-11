import axios from 'axios';

export const Check = () => (dispatch, username, password, isLoggedIn) => {
    console.log("Check");
    axios.post('/user/login',{
        username: username,
        password:  password
    })
      .then (({data}) => {console.log(data)})
      .catch(console.log);
  };

export const setUsername = username =>({ 
    type:'SET_USERNAME',
    username,
});

export const setPassword = password =>({ 
    type:'SET_PASSWORD',
    password,
});

export const setAge = age => ({
    type: 'SET_AGE',
    age,
});

export const setEmail = email => ({
    type: 'SET_EMAIL',
    email,
});

export const setGender = gender => ({
    type: 'SET_GENDER',
    gender,
});

export const setCollegeYear = collegeYear => ({
    type: 'SET_COLLEGE_YEAR',
    collegeYear,
});

export const setMajor = major => ({
    type: 'SET_MAJOR',
    major,
});

export const setFirstName = firstName => ({
    type: 'SET_FIRSTNAME',
    firstName,
});

export const setLastName = lastName => ({
    type: 'SET_LASTNAME',
    lastName,
});

export const setInfo = info => ({
    type: 'SET_INFO',
    info,
});

// how the public will see, check box
export const setListed = listedAs => ({
    type: 'SET_LISTED',
    listedAs,
});

export const setPronoun = pronoun => ({
    type: 'SET_PRONOUN',
    pronoun,
});

//what you like , check box
export const setPreference = preference => ({
    type: 'SET_PREFERENCE',
    preference,
});

export const setIsLoggedIn = isLoggedIn =>({
    type:'SET_IS_LOGGED_IN',
    isLoggedIn,
});

export const setToken = token => ({
    type: 'SET_TOKEN',
    token,
})

export const setActiveUsers = activeUsers => ({
    type: 'SET_ACTIVE_USERS',
    activeUsers,
  });
  