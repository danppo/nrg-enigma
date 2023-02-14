const express = require('express');
require('dotenv').config();
const app = express();
const CyclicDb = require('@cyclic.sh/dynamodb');
const db = CyclicDb('adventurous-jersey-eelCyclicDB');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.use(express.json());

const users = [
  {
    email: 'eve.holt@reqres.in',
    password: '$2b$10$ZvBQMjllLRgYZgCx34/Y.e6d5Q9K9GhpwGVwRC3MVuW71./Glqg0u', //'cityslicka',
  },
];

const verifyUserToken = (req, res, next) => {
  // console.log(req.headers.authorization);
  if (!req.headers.authorization) {
    return res.status(401).send('Unauthorized request');
  }
  const token = req.headers['authorization'].split(' ')[1];
  if (!token) {
    return res.status(401).send('Access denied. No token provided.');
  }
  try {
    console.log(req.user);
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    req.test = decoded.test;
    // console.log(req);
    next();
  } catch (err) {
    res.status(400).send('Invalid token.');
  }
};

app.get('/api/users', verifyUserToken, (req, res) => {
  console.log(req.test);
  res.json(users);
});

app.post('/api/register', async (req, res) => {
  const user = req.body;
  // console.log(req.body);
  if (!user.email || !user.password) {
    return res.status(400).send('Username and password are required.');
  }
  // TODO: check use has not already been created
  const hash = await bcrypt.hash(user.password, 10);
  user.password = hash;
  users.push(user);
  res.json(user);
});

app.post('/api/login', async (req, res) => {
  const user = req.body;
  //check if user exists
  const foundUser = users.find((user) => user.email === req.body.email);
  if (!foundUser) {
    return res.status(400).send('Invalid email');
  }
  //check if password is correct
  const isPasswordValid = await bcrypt.compare(user.password, foundUser.password);
  if (!isPasswordValid) {
    return res.status(400).send('Invalid password');
  }
  //create token
  const token = jwt.sign({ user, test: 'ID' }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });
  res.json({ token });
});

// const animals = db.collection('animals');

// const run = async function () {
//   let animals = db.collection('animals');

//   // create an item in collection with key "leo"
//   let leo = await animals.set('leo', {
//     color: 'pink',
//   });

//   // get an item at key "leo" from collection animals
//   let item = await animals.get('leo');
//   console.log(item);
// };
// run();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.listen(3006, () => {
  console.log('Server is running on port 3006');
});

// TODO: get postcodes  https://postcodes.io/
// TODO: get weather  https://open-meteo.com/
