import assert from "assert";
import { george_washington } from "./Users";
import { Network } from "./Network";

export const test_highestMovieCount_User = () => {
  // Arrange
  // Act
  const actual = george_washington.highestMovieCount(Network.User);
  // Assert
  const expected = [
    "Lincoln (2012)",
    "All the President’s Men (1976)",
    "Dr. Strangelove (1964)",
    "W. (2008)",
    "Absolute Power (1997)"
  ];
  try {
    assert.deepStrictEqual(actual, expected);
    console.log(test_highestMovieCount_User.name + " passed");
    console.log("User: ", actual);
    return actual;
  } catch (e) {
    return (e);
  }
}

export const test_highestMovieCount_Friends = () => {
  // Arrange
  // Act
  const actual = george_washington.highestMovieCount(Network.Friends);

  // Assert
  const expected = ["Lincoln (2012)"];
  try {
    assert.deepStrictEqual(actual, expected);
    console.log(test_highestMovieCount_Friends.name + " passed");
    console.log("Friends: ", actual);
    return actual;
  } catch (e) {
    return (e);
  }
}

export const test_highestMovieCount_FriendsOfFriends = () => {
  // Arrange
  // Act
  const actual = george_washington.highestMovieCount(Network.FriendsOfFriends);

  // Assert
  const expected = ["Absolute Power (1997)"];
  try {
    assert.deepStrictEqual(actual, expected);
    console.log(test_highestMovieCount_FriendsOfFriends.name + " passed");
    console.log("Friends of Friends: ", actual);
    return actual;
  } catch (e) {
    return (e);
  }
}
