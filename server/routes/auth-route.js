const express = require("express");
const router = express.Router();
const authController = require("../controller/auth-controller");

//* Syntax One.
// router.get('/',authController.home)

//* Syntax Two.
router.route('/').get(authController.home);

router.route('/registration').post(authController.registration)

router.route('/login').post(authController.login);
router.route('/delete/:id').delete(authController.Delete);
router.route('/edit/:id').patch(authController.edit);


module.exports = router;