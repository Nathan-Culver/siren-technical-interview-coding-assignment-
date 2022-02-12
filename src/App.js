
import React, { useState } from "react";
import "./styles.css";
import 
  {
    test_highestMovieCount_User, 
    test_highestMovieCount_Friends, 
    test_highestMovieCount_FriendsOfFriends
  } from "./HighestMovieCount.test";


const App = () => {

  return (
    <div className="App">
      <h1>Siren Coding Assignment</h1>
      <h2>Problem</h2>
      <h3>At Facebook, you have friends who all have a list of movies that they like. Write a function that returns the most popular movie of a person in his/her network of friends. Network means that you have to consider friends of friends as well.</h3>
      <h2>Solution</h2>
      <h3>Use object oriented design with the language you like. Write at least 1 test for the happy path.</h3>
      <br></br>
      <br></br>
      <h3>George Washington</h3>
      <h3>Target User's Highest Moive(s)</h3>
      <br></br>
      <h4>{test_highestMovieCount_User()}</h4>
      <br></br>
      <br></br>
      <h3>Abraham Lincoln, Andrew Jackson, John Adams, Thomas Jefferson</h3>
      <h3>Friend's Highest Moive</h3>
      <br></br>
      <h4>{test_highestMovieCount_Friends()}</h4>
      <br></br>
      <br></br>
      <h3>John Quincy Adams, James Monroe, James Madison, William Henry Harrison,</h3>
      <h3>John Tyler, James K Polk, Zachary Taylor, Millard Fillmore,</h3>
      <h3>Franklin Pierce, James Buchanan</h3>
      <h3>Friends Of Friend's Highest Moive</h3>
      <br></br>
      <h4>{test_highestMovieCount_FriendsOfFriends()}</h4>
    </div>
  );
}
export default App;