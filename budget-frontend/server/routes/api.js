/**
 * Created by Jonathan on 5/29/2017.
 */
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('this has loaded');

  res.send({testString: 'api works'});
}).post('/create-bill', (req, res) => {
//  console.log(req);
  console.log(req.body);
  res.send({testString: 'create bill works kindof'});
});

module.exports = router;
