# Gator-Dater
Gator-Dater is a dating app for SFSU students, in which students register and like other people's profiles which then create's a match.
The user will get to interact with their match via email, and will go in
knowing basic information such as name, age, major (all of which is used to match them in the first place). The goal of our app is
to make our fellow SFSU students feel a little less cold this winter.
### Welcome Page
![Welcome Screen- State 1](/screenshots/home.png)
- This is the home screen which has two buttons
    - One for login
    - One to sign up
### Register Page
![Register- State 1](/screenshots/create.png)
- Fill out all input boxes to create a user
- Input Fields have restrictions and warnings in case something went wrong and is unable to sign up
- If success then the user will be redirected to their profile page
### Login Page
![Log In- State 1](/screenshots/login.png)
- Logs the user in by using the user password and username
- If success then the user will be redirected to their profile page
### Main Page
![Profile Page- State 1](/screenshots/profile1.png)
- A card with other user information is displayed
- The user has the ability to like another user's profile as well as to randomly view others
- If other users and the current user liked each other then a match will happen
- A match will display a modal that contains each others emails to exchange
### Additional User Information
![Edit Profile Page- State 1](/screenshots/edit&signup_profile.png)
- In case the user needs to change any information about them.
# Architecture
1. Express (Back End) - Back end with get/post endpoints
2. MongoDB (Storage) - For storing all the users information (other than their login information)
3. Amazon Web Service Elastic Compute Cloud (AWS EC2) - To serve our application
4. Websocket - For real time chat interactions (front end)
5. React + Redux - for building UI 
6. Microserver architecture (Back End) - for some services to run multiple instances
7. Gateway - All front end requests hit gateway first for authorization
8. Redis - For caching values (such as the user login info, so they won't have to continually log back in)
