import User from "./User";

//Friends of Friends 
const john_quincy_adams = new User(
  [],
  ["All the President’s Men (1976)", "The American President (1995)"]
);

const james_monroe = new User(
  [],
  ["The Ides of March (2011)", "All the President’s Men (1976)"]
);

const james_madison = new User(
  [],
  [
    "The Ides of March (2011)",
    "All the President’s Men (1976)",
    "Frost/Nixon (2008)"
  ]
);

const william_henry_harrison = new User(
  [],
  [
    "The Ides of March (2011)",
    "Dr. Strangelove (1964)",
    "W. (2008)",
    "Absolute Power (1997)"
  ]
);

const john_tyler = new User(
  [],
  ["The American President (1995)", "Dave (1993)", "W. (2008)"]
);

const james_k_polk = new User(
  [],
  [
    "Lincoln (2012)",
    "Frost/Nixon (2008)",
    "Dave (1993)",
    "Absolute Power (1997)"
  ]
);

const zachary_taylor = new User(
  [],
  [
    "Lincoln (2012)",
    "Frost/Nixon (2008)",
    "Dave (1993)",
    "Absolute Power (1997)"
  ]
);

const millard_fillmore = new User(
  [],
  [
    "The American President (1995)",
    "Dr. Strangelove (1964)",
    "Absolute Power (1997)"
  ]
);

const franklin_pierce = new User(
  [],
  [
    "The American President (1995)",
    "Dr. Strangelove (1964)",
    "Absolute Power (1997)"
  ]
);

const james_buchanan = new User(
  [],
  [
    "Lincoln (2012)",
    "Frost/Nixon (2008)",
    "Dave (1993)",
    "Absolute Power (1997)"
  ]
);

//Friends 
const abraham_lincoln = new User(
  [james_k_polk, zachary_taylor, james_buchanan],
  [
    "Lincoln (2012)",
    "All the President’s Men (1976)",
    "The American President (1995)",
    "Frost/Nixon (2008)",
    "Dave (1993)",
    "Absolute Power (1997)"
  ]
);

const andrew_jackson = new User(
  [john_tyler, millard_fillmore],
  [
    "Lincoln (2012)",
    "All the President’s Men (1976)",
    "Frost/Nixon (2008)",
    "Absolute Power (1997)"
  ]
);

const john_adams = new User(
  [john_quincy_adams, franklin_pierce],
  ["Lincoln (2012)", "All the President’s Men (1976)", "Dr. Strangelove (1964)"]
);

const thomas_jefferson = new User(
  [james_madison, james_monroe, william_henry_harrison],
  ["Lincoln (2012)", "The Ides of March (2011)", "Absolute Power (1997)"]
);

//User
export const george_washington = new User(
  [john_adams, abraham_lincoln, thomas_jefferson, andrew_jackson],
  [
    "Lincoln (2012)",
    "All the President’s Men (1976)",
    "Dr. Strangelove (1964)",
    "W. (2008)",
    "Absolute Power (1997)"
  ]
);
