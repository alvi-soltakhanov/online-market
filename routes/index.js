const { Router } = require('express');
const router = Router();

router.use(require('./categories.route'))
router.use("/brands/", require('./brands.route'))

module.exports = router;