var express = require('express');
const graffie_controlers= require('../controllers/graffie');
var router = express.Router();
/* GET home page. */
router.get('/', graffie_controlers.graffie_view_all_Page );
 
module.exports = router;