var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get(
  '/listUsers',
  function(req, res, next){
    res.json(
      {
        users:[
          {name: 'Francisco'},
          {name: 'joão'},
          {name: 'Maria'}
        ]
      }
    )
  }
);

router.get(
  '/listUsersAgain',
  function (req, res, next){
    res.json(
      {
        users: [
          {name: 'Mario'},
          {name: 'Arthur'}
        ]
      }
    )
  }
);

module.exports = router;
