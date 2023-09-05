const mongo = require("../mongo");
const collection = mongo.getCollection("users");


const loginController = (req, res)=>{

    let {name, password} = req.body;
    
    collection.findOne({first_name : name, password: password}).
    then((user)=>{
        console.log(user);
        if(user) // null
        {
            req.session.user = user;
            
            if(user.role === "admin")
            {
                res.redirect("/admin");
            }
            else
            {
                res.redirect("/");
            }
        }
        else{
            res.redirect("/");
        }
         
    })
    .catch((error)=>{
        console.log(error);
        res.redirect("/");
    })
};

module.exports = loginController;