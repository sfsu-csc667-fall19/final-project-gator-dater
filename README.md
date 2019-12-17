# Gator-Dater
Gator-Dater is a dating app for SFSU students, in which students register and like other people's profiles which then create's a match.
The user will get to interact with their match via email, and will go in
knowing basic information such as name, age, major (all of which is used to match them in the first place). The goal of our app is
to make our fellow SFSU students feel a little less cold this winter.
### Welcome Page
![Welcome Screen- State 1](/screenshots/home.png)
- Leads to the the Sign Up Page, where the user signs up for an account and provides basic dating information
- Leads to the Login Page for returning users
### Register Page
![Register- State 1](/screenshots/create.png)
- Continue button saves the users information for matching purposes, and also for when they login next time
- Leads to a second sign up page that can upload a picture of the user or put more additional information
- This is where the user creates their account and provides basic dating information we will use to match them
### Login Page
![Log In- State 1](/screenshots/login.png)
- Logs the user in by using the user password and username
- Leads to the profile page
### Main Page
![Profile Page- State 1](/screenshots/profile.png)
- Based on the preferential dating information provided by the user, we will show them a match. Shows their name, age, gender, and
major.
- Logs the user out (if they want to log out, for some reason)
- Able to like another user and if a match happens then email will be revealed to contact them.
### Main Page (no matches)
![Edit Profile Page (no matches)- State 1](/screenshots/edit&signup_profile.png)
- In case the user needs to change any information.
# Architecture
1. Express (Back End) - Back end with get/post endpoints
2. MongoDB (Storage) - For storing all the users information (other than their login information)
3. Amazon Web Service Elastic Compute Cloud (AWS EC2) - To serve our application
4. Websocket - For real time chat interactions (front end)
5. React + Redux - for building UI 
5. Microserver architecture (Back End) - for some services to run multiple instances
6. Gateway - All front end requests hit gateway first for authorization
7. Redis - For caching values (such as the user login info, so they won't have to continually log back in)
