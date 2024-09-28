const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('./models/User');
const Product = require('./models/Product');

const router = express.Router();

router.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  const user = new User({ email, password });
  await user.save();
  const token = jwt.sign({ userId: user._id }, 'YOUR_SECRET_KEY');
  res.send({ token });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(422).send({ error: 'Invalid password or email' });
  }
  try {
    await user.comparePassword(password);
    const token = jwt.sign({ userId: user._id }, 'YOUR_SECRET_KEY');
    res.send({ token });
  } catch (err) {
    return res.status(422).send({ error: 'Invalid password or email' });
  }
});

router.get('/cart', async (req, res) => {
  const token = req.headers.authorization.replace('Bearer ', '');
  jwt.verify(token, 'YOUR_SECRET_KEY', async (err, payload) => {
    if (err) {
      return res.status(401).send({ error: 'You must be logged in.' });
    }
    const { userId } = payload;
    const user = await User.findById(userId).populate('cart');
    res.send(user.cart);
  });
});

router.post('/cart', async (req, res) => {
  const { productId } = req.body;
  const product = await Product.findById(productId);
  const token = req.headers.authorization.replace('Bearer ', '');
  jwt.verify(token, 'YOUR_SECRET_KEY', async (err, payload) => {
    if (err) {
      return res.status(401).send({ error: 'You must be logged in.' });
    }
    const { userId } = payload;
    const user = await User.findById(userId);
    user.cart.push(product);
    await user.save();
    res.send(user.cart);
  });
});

module.exports = router;
