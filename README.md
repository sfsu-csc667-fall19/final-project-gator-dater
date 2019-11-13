# Proposal
Our final project proposal is "Gator-Dater". A dating app for SFSU students, in which students register and see people who match their
dating interests (commonly known as "matches"). The user will get to interact with their match via a text based chat, and will go in
knowing basic information such as name, age, major (all of which is used to match them in the first place). The goal of our app is
to make our fellow SFSU students feel a little less cold this winter.

# UI Mockup
## Welcome Page
![Welcome Screen- State 1](https://user-images.githubusercontent.com/45413260/68814532-f01dc800-062d-11ea-9e7a-243905ded489.png)
1.
2.
3.
## Register Page
![Register- State 1](https://user-images.githubusercontent.com/45413260/68814554-fc098a00-062d-11ea-9611-d8ca441e8be1.png)
1.
2.
3.
4.
## Login Page
![Log In- State 1](https://user-images.githubusercontent.com/45413260/68814562-00ce3e00-062e-11ea-9e10-14eff1b66a1b.png)
1.
2.
3.
4.
## Main Page
![Landing Page- State 1](https://user-images.githubusercontent.com/45413260/68814573-0592f200-062e-11ea-84a9-4d9912cc920a.png)
1.
2.
3.
4.
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
