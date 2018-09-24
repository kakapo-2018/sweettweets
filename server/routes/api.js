const express = require("express");
const verifyJwt = require("express-jwt");

const crypto = require("../lib/crypto");
const users = require("../lib/users");
const auth = require("../lib/auth");
const tweetDB = require("../lib/tweets");

const router = express.Router();
router.use(express.json());

//get all tweets
router.get("/tweet", (req, res) => {
  tweetDB.getTweets().then(data => res.json(data));
});


router.post("/signin", sayHello, signIn, auth.issueJwt);
function sayHello(req, res, next) {
  next();
}

router.post("/register", register, auth.issueJwt);

function signIn(req, res, next) {
  users
    .getByName(req.body.user_name)
    .then(user => {
      return user || invalidCredentials(res);
    })
    .then(user => {
      return user && crypto.verifyUser(user.hash, req.body.password);
    })
    .then(isValid => {
      return isValid ? next() : invalidCredentials(res);
    })
    .catch(() => {
      res.status(400).send({
        errorType: "DATABASE_ERROR"
      });
    });
}

function register(req, res, next) {
  users
    .exists(req.body.user_name)
    .then(exists => {
      if (exists) {
        return res.status(400).send({ message: "User exists" });
      }
      users.create(req.body.user_name, req.body.password, req.body.cohort).then(() => next());
    })
    .catch(err => {
      res.status(400).send({ message: err.message });
    });
}

function invalidCredentials(res) {
  res.status(400).send({
    errorType: "INVALID_CREDENTIALS"
  });
}

// express-jwt middleware lets us use a function as the secret,
// so we can grab from wherever...
function getSecret(req, payload, done) {
  done(null, process.env.JWT_SECRET);
}

// Protect all routes beneath this point
router.use(
  verifyJwt({
    secret: getSecret
  }),
  auth.handleError
);

// delete tweet
router.delete("/tweet", (req, res) => {
  tweetDB
    .delTweet(req.body.id)
    .then(data => res.json(data));
});

// These routes are protected  EXAMPLE IS BELOW
// router.get('/secret', (req, res) => {
//   res.json({
//     message: 'This is a SECRET quote.',
//     user: `Your user ID is: ${req.user.id}`
//   })
// })
// router.post("/add/tweet", (req, res) => {
//   console.log("hit the route wahoooo");
// });

//save a tweet
router.post("/add/tweet", (req, res) => {
  tweetDB
    .saveTweet(req.body.tweet, req.body.user_id)
    .then(data => res.json(data));
});

// update tweet
router.put("/tweet/update", (req, res) => {
  tweetDB
    .updateTweet(req.body.tweet)
    .then(data => res.json(data));
});



module.exports = router;
