/**
 * Created by Jonathan on 5/29/2017.
 */
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('api works');
});

router.post('/create-bill', (req, res) => {
  console.log(req);
});

module.exports = router;
