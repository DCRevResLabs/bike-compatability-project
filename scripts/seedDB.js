const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Components collection and inserts the components and users below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/bikeComponentDB"
);

const componentSeed = [
  {
    name: "Bottom Bracket",
    type: "Drivetrain",
    pointsOfContact: [],
    influencers: [],
    definition: "",
    wikiLink: "",
    date: new Date(Date.now()),
  },
  {
    name: "Cassette",
    type: "Drivetrain",
    pointsOfContact: [],
    influencers: [],
    definition: "",
    wikiLink: "",
    date: new Date(Date.now()),
  },
  {
    name: "Chain",
    type: "Drivetrain",
    pointsOfContact: [],
    influencers: [],
    definition: "",
    wikiLink: "",
    date: new Date(Date.now()),
  },
  {
    name: "Saddle",
    type: "Cockpit",
    pointsOfContact: [],
    influencers: [],
    definition: "",
    wikiLink: "",
    date: new Date(Date.now()),
  },
  {
    name: "Pedal",
    type: "Drivetrain",
    pointsOfContact: [],
    influencers: [],
    definition: "",
    wikiLink: "",
    date: new Date(Date.now()),
  },
];

db.Component.remove({})
  .then(() => db.Component.collection.insertMany(componentSeed))
  .then((data) => {
    console.log(data.result.n + " component records inserted!");
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

const userSeed = [
  {
    name: "DC",
    email: "dc@beautifulrevolution.com.au",
    password: "dc",
    role: "admin",
    date: new Date(Date.now()),
  },
];

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then((data) => {
    console.log(data.result.n + " user records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
