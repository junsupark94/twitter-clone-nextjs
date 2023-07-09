import React from 'react';
import Tweet from './Tweet';
import DUMMY_TWEETS from './tweet-data';

type TweetsProps = {

};

const Tweets:React.FC<TweetsProps> = () => {

  return <div>
    {DUMMY_TWEETS.map(tweet => <Tweet key={tweet.id} tweet={tweet}/>)}
  </div>
}
export default Tweets;