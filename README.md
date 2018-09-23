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