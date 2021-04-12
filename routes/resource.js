var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var graffie_controller = require('../controllers/graffie');
/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// graffie ROUTES ///
// POST request for creating a graffie.
router.post('/resource/graffie', graffie_controller.graffie_create_post);
// DELETE request to delete graffie.
router.delete('/resource/graffie/:id', graffie_controller.graffie_delete);
// PUT request to update graffie.
router.put('/resource/graffie/:id', graffie_controller.graffie_update_put);
// GET request for one graffie.
router.get('/resource/graffie/:id', graffie_controller.graffie_detail);
// GET request for list of all graffie items.
router.get('/resource/graffie', graffie_controller.graffie_list);
/* GET detail graffie page */
router.get('/detail', graffie_controller.graffie_view_one_Page);

module.exports = router;