const { Router } = require("express");
const router = Router();

router.get("", (req, res) => {

    req.session.destroy((err) => {
        res.redirect("/");
    });

})


module.exports = router;