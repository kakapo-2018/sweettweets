# sweettweets

## What's the deal?
Vision: A place to view tweets of advice from other students

## Planning
# Team dynamics
Team: Leslie, Marie, Robert, Robbie, Nat

- Expectations
- Work Styles
- Personalities
- Declerations

# Team Tasks


# Project Planning
- MVP
- Planning
Standups
Durations
End of day
- Stretch
- Wireframe
- Libraries
- Timeline

# Focus on
- Teamwork
- Time frame
- Finished result
- Regular checkins/standups
- Presentation

Use sticky notes, slack


## User Stories
# MVP
- Guest - view twees of advice
- Guest - to be able to register as a user and tweet
- User - to experience simple, clean layout
- User - have a fun, welcoming experience

# Stretches
1. filter by content
2. profiles
3. register user + edit tweet
4. registered user can have fav tweets


Register form:
- Name
* Cohort
* Year
* Tweet " "
* Location (welly/auck)
* Student/staff
- Username/password

* = Used on profile 


## Battle plan
To Do:
- Boilerplate - React, Reduce, Auth
- Deploy
- API docs users - tweets

# Client
- App component stateful (with nav, login, auth)
- redux action: requet tweet, receive tweet, add tweet)
- Reducers (action) fetch tweet(), add tweet()
- Reducer Auth
- Reducer Tweet
- Reducer is fetching
- Robbies bird
- Bootstrap - Mobile friendly
- AOS client

# Server
- DB users - migration + seed (name, password, cohort, id)
- DB tweet - migration + seed (tweet string, user id)
- routes/API post tweet
- API get tweet


AOS animation






## Views (Client Side)

## Reducers (Client Side)

## Actions

## API (Client - Server)

  | Method | Endpoint | Response | Non registered access |
  | --- | --- | --- | --- | 
  | GET | api/tweet | array of tweet objects | Yes |
  | POST | api/add/tweet | ... | No |
  | POST | api/auth/register | object with token access | Yes |
  | POST | api/auth/login | object with token access | Yes |
  | PUT | api/edit/tweet | ... | Yes |
  | PUT | api/edit/profile | ... | Yes |
  | GET | api/profile | object | Yes |






Method : GET 
Route : / API/TWEET
(body) - an array of objects
```sh
[
    {
        "tweet": "Drink water",
        "user_id": "1"   
    },
    {
        "tweet" : "Eat vegetables",
        "user_id": "2"
    },
    {
        "tweet" : "blablablablabla",
        "user_id": "2"
    },
]
```

Method : POST 
Route : / API/ADD/TWEET
(body) - an object with a string of max 200 char in tweet
```sh
{"tweet" : "tweet tweet tweet",
"user_id" : "1"
} 
```

Method : POST 
Route : / API/AUTH/REGISTER

(body) - an object / if correct new user :
```sh
{"user_name":"OTHERbob",
"cohort":"1",
"password":"bob"
} 
```
Will return
```sh
{"message":"Authentication successful","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJib2JCT0IiLCJpYXQiOjE1Mzc0ODM4MDMsImV4cCI6MTUzNzU3MDIwM30.UfxJJQ8b0ppekGycWMu6FydSb3RaW0i8couDx3bOwjc"}
```

(body) - an object /if user name exists :
```sh
{"user_name":"bob",
"cohort":"1",
"hash":"bob"
} 
```
Will return
```sh
{"message":"User Name Taken"}
```

/!\ only mandatory to habe a name a password as a string
```sh
{
"user_name":"OTTERbob",
"password":""
} 
```
Will return
```sh
{"message":"Authentication successful","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJPVFRFUmJvYiIsImlhdCI6MTUzNzQ4NTEwOCwiZXhwIjoxNTM3NTcxNTA4fQ.g8J41Y5dZHMVSOY-_aJHRZUbVJfYOglUVRVjneFshxs"}
```


Method : POST 
Route : / API/AUTH/LOGIN 

(body) - an object / if correct combinaison :
```sh
{"user_name":"bob",
"password":"krunk"
} 
```
Will return
```sh
{"message":"Authentication successful","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJib2IiLCJpYXQiOjE1Mzc0ODQ4MTUsImV4cCI6MTUzNzU3MTIxNX0.wNY3GveyZIeBKwDVpJ3ulkYE_KQv-T4cnuQz4bAsCWw"}
```

(body) - an object / if incorrect password :
```sh
{"user_name":"bob",
"password":"bob"
} 
```
Will return
```sh
{"message":"Password is incorrect"}
```
(body) - an object / if incorrect name :
```sh
{"user_name":"maurice123",
"password":"krunk"
} 
```
Will return
```sh
{"message":"User does not exist"}
```

--STRETCH--

Method : PUT 
Route : / API/EDIT/TWEET

Method : PUT 
Route : / API/EDIT/PROFILE

Method : GET 
Route : / API/PROFILE

 ---

## DB (Server Side)

## Setup
Run the following commands in your terminal:

yarn + boilerplate
db sqlight
knex
Aos?
React spinners?
...

## Heroku
Creating your app
Create your app with heroku create [name]

You can check that this was successful by running heroku apps to view a list of your apps

Adding postgres
Add postgresql (hobby dev) to your app at https://dashboard.heroku.com/apps/[APP NAME HERE]/resources

Check that pg has been added by running heroku addons to ensure the postgresql db is on your app

Deploying
To push your local master branch to your heroku app:

yarn h:deploy
  - or -
npm run h:deploy
Run heroku migrations:

yarn h:migrate
  - or -
npm run h:migrate
Run heroku seeds:

yarn h:seed
  - or -
npm run h:seed
If ever you need to rollback, you can also:

yarn h:rollback
  - or -
npm run h:rollback
Ta-Da!
Your app should be deployed!


## API docs
