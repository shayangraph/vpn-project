import React, { useState } from "react";
import "./Tweet.css";

const Tweet = () => {
  // tweet method
  const [tweet, setTweet] = useState(false);
  const showtweet = () => {
    if (window.scrollY >= 2400) {
      setTweet(true);
    } else {
      setTweet(false);
    }
  };
  window.addEventListener("scroll", showtweet);
  return (
    <div className="tweet-container">
      <div className="title">
        <h1>کاربران در مورد ما چه نظری دارند</h1>
      </div>
      <div className="tweet">
        <img
          className={tweet ? "tweet1 active" : "tweet1"}
          src="/images/tweet.png"
          alt="tweet"
        />
        <img
          className={tweet ? "tweet2 active" : "tweet2"}
          src="/images/tweet.png"
          alt="tweet"
        />
        <img
          className={tweet ? "tweet3 active" : "tweet3"}
          src="/images/tweet.png"
          alt="tweet"
        />
      </div>
    </div>
  );
};

export default Tweet;
