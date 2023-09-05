const mongo = require("../../mongo");
const collection = mongo.getCollection("users");



const adminController = (req, res)=>{ // kontrolise admin stranocu

    res.render("admin/adminDashBoard");
};

module.exports = adminController