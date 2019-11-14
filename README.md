# Proposal
Our final project proposal is "Gator-Dater". A dating app for SFSU students, in which students register and see people who match their
dating interests (commonly known as "matches"). The user will get to interact with their match via a text based chat, and will go in
knowing basic information such as name, age, major (all of which is used to match them in the first place). The goal of our app is
to make our fellow SFSU students feel a little less cold this winter.

# UI Mockup
### Welcome Page
![Welcome Screen- State 1](https://user-images.githubusercontent.com/45413260/68815034-26a81280-062f-11ea-8b06-9059da1ea8e3.png)
1. Leads to the the Register Page, where the user signs up for an account and provides basic dating information
2. Leads to the Register Page, same as 1
3. Leads to the Login Page for returning users
### Register Page
![Register- State 1](https://user-images.githubusercontent.com/45413260/68815038-2c055d00-062f-11ea-9d34-c22220405f31.png)
1. Register button that saves the users information for matching purposes, and also for when they login next time
2. Leads to the same page they are currently on (Register Page)
3. Leads to the Login Page for returning users
4. This is where the user creates their account and provides basic dating information we will use to match them
### Login Page
![Log In- State 1](https://user-images.githubusercontent.com/45413260/68815049-31fb3e00-062f-11ea-9100-3dfdfba38273.png)
1. Logs the user in by using the user credentials provided in 4
2. Leads to the Register Page
3. Leads to the same page they are currently on (Login Page)
4. Username and password used to log the user in
### Main Page
![Landing Page- State 1](https://user-images.githubusercontent.com/45413260/68815052-36bff200-062f-11ea-947a-0f10b03ef83c.png)
1. Based on the preferential dating information provided by the user, we will show them a match. Shows their name, age, gender, and
major. Might show more information depending on further implementation (perhaps an about me)
2. Leads to the Register Page
3. Logs the user out (if they want to log out, for some reason)
4. A chat with their specified match. Currently supports mostly text, and maybe images.
### Main Page (no matches)
![Landing Page (no matches)- State 1](https://user-images.githubusercontent.com/45413260/68815929-afc04900-0631-11ea-8182-49316fa3cdea.png)
1. Generic no matches in case none are found
2. Leads to the Register Page
3. Logs the user out (if they want to log out, for some reason)
# Architecture
1. Express (Back End) - Back end with get/post endpoints
2. MongoDB (Storage) - For storing all the users information (other than their login information)
3. Amazon Web Service Elastic Compute Cloud (AWS EC2) - To serve our application
4. Websocket - For real time chat interactions (front end)
5. React + Redux -
5. Microserver architecture
6. Gateway - All front end requests hit gateway first for authorization
7. Redis - For caching values (such as the user login info, so they won't have to continually log back in)
8. Backend components must be dockerized
9. Kafka for at least 1 conveyer
10. Distributed messaging with kafka or redis?

Microserver architecture back end with some services running multiple instances
Backend components must be dockerized and running in Docker swarm mode
Kafka for at least 1 conveyer
Distributed messaging can be done with either kafka or redis
