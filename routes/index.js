const { Router } = require('express');
const router = Router();


router.use("/brands/", require('./brands.route'))



module.exports = router;