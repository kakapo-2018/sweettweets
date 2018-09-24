import React from 'react'
import { connect } from 'react-redux'

import { addTweet } from './../actions'

import Tweet from './Tweet'

const TweetList = (props) => {
  console.log(props)
  return (
    <div>
      {props.tweet.map(tweet => {
        <Tweet key={tweet.id}
          tweet={tweet}
          user_id={tweet.user_id} />
      }
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    tweets: state.tweets
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTweet: (id) => {
      dispatch(addTweet(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tweetlist);