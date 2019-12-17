# Gator-Dater
Gator-Dater is a dating app for SFSU students, in which students register and like other people's profiles which then create's a match.
The user will get to interact with their match via email, and will go in
knowing basic information such as name, age, major (all of which is used to match them in the first place). The goal of our app is
to make our fellow SFSU students feel a little less cold this winter.
### Welcome Page
![Welcome Screen- State 1](/screenshots/home.png)
1. Leads to the the Register Page, where the user signs up for an account and provides basic dating information
2. Leads to the Register Page, same as 1
3. Leads to the Login Page for returning users
### Register Page
![Register- State 1](/screenshots/create.png)
1. Register button that saves the users information for matching purposes, and also for when they login next time
2. Leads to the same page they are currently on (Register Page)
3. Leads to the Login Page for returning users
4. This is where the user creates their account and provides basic dating information we will use to match them
### Login Page
![Log In- State 1](/screenshots/login.png)
1. Logs the user in by using the user credentials provided in 4
2. Leads to the Register Page
3. Leads to the same page they are currently on (Login Page)
4. Username and password used to log the user in
### Main Page
![Profile Page- State 1](/screenshots/profile.png)
1. Based on the preferential dating information provided by the user, we will show them a match. Shows their name, age, gender, and
major. Might show more information depending on further implementation (perhaps an about me)
2. Leads to the Register Page
3. Logs the user out (if they want to log out, for some reason)
4. A chat with their specified match. Currently supports mostly text, and maybe images.
### Main Page (no matches)
![Edit Profile Page (no matches)- State 1](/screenshots/edit&signup_profile.png)
1. Generic no matches in case none are found
2. Leads to the Register Page
3. Logs the user out (if they want to log out, for some reason)
# Architecture
1. Express (Back End) - Back end with get/post endpoints
2. MongoDB (Storage) - For storing all the users information (other than their login information)
3. Amazon Web Service Elastic Compute Cloud (AWS EC2) - To serve our application
4. Websocket - For real time chat interactions (front end)
5. React + Redux - for building UI 
5. Microserver architecture (Back End) - for some services to run multiple instances
6. Gateway - All front end requests hit gateway first for authorization
7. Redis - For caching values (such as the user login info, so they won't have to continually log back in)
8. Docker - Backend components dockerized and to run in Docker swarm mode
9. Kafka - for at least 1 conveyer
10. Distributed messaging with kafka or redis
