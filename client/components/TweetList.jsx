import React from 'react'
import { connect } from 'react-redux'


import Tweet from './Tweet'

const TweetList = (props) => {
  console.log(props.tweets.tweets)
  return (
    <div className='tweetList'>
      {props.tweets.tweets && props.tweets.tweets.map(tweet => {
        return <Tweet key={tweet.id}
          tweet={tweet.tweet}
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


export default connect(mapStateToProps)(TweetList);