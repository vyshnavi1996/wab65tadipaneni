var graffie = require('../models/graffie');
// List of all graffie
exports.graffie_list = async function (req, res) {
    try {
        thegraffies = await graffie.find();
        res.send(thegraffies);
    } catch (err) {
        res.error(500, `{"error": ${err}}`);
    }
};
// for a specific graffie.
exports.graffie_detail = async function(req, res) {
    console.log("detail"  + req.params.id)
    try {
        result = await graffie.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }

};
// Handle graffie create on POST.
exports.graffie_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Graffie();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"graffietype":"goat", "cost":12, "size":"large"}
 
    document.graffiename = req.body.graffiename;
    document.habitat = req.body.habitat;
    document.classification = req.body.classification;
    document.price = req.body.price;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.error(500, `{"error": ${err}}`);
    }
};
// Handle graffie delete on DELETE.
exports.graffie_delete = async function(req, res) {
    console.log("delete "  + req.params.id)
    try {
        result = await graffie.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};



// Handle graffie update form on PUT.
exports.graffie_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await graffie.findById( req.params.id)
        // Do updates of properties
        if(req.body.graffiename) toUpdate.graffiename = req.body.graffiename;
        if(req.body.habitat) toUpdate.habitat = req.body.habitat;
        if(req.body.classification) toUpdate.classification = req.body.classification;
        if(req.body.price) toUpdate.price = req.body.price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }

};

// VIEWS
// Handle a show all view
exports.graffie_view_all_Page = async function (req, res) {
    console.log("check")
    try {
        thegraffie = await graffie.find();
        res.render('graffie', { title: 'graffie Search Results', results: thegraffie });
    }
    catch (err) {
        res.error(500, `{"error": ${err}}`);
    }
};
// Handle a show one view with id specified by query
exports.graffie_view_one_Page = async function(req, res) {
    console.log("single view for id "  + req.query.id)
    try{
        result = await graffie.findById( req.query.id)
        res.render('graffiedetail', 
{ title: 'graffie Detail', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
