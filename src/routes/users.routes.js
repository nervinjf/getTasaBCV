const { Router } = require('express');
const { getAllUsers } = require('../controllers');
// const authenticate = require("../middlewares/auth.middleware");
const authVerification = require("../middlewares/auth.middleware");

const router = Router();


router.get("/tasa", getAllUsers);

module.exports = router;