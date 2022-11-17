const express = require("express")
const router = express.Router()
const account_controller = require("../controllers/account_controller")
const authentication_controller = require("../controllers/authentication_controller")


router.post('/login', authentication_controller.passport_local_authenticate)
router.get("/login_google", authentication_controller.passport_google_authenticate)
router.get("/login_google/callback", authentication_controller.passport_google_authenticate_callback)
router.get("/login_facebook", authentication_controller.passport_facebook_authenticate)
router.get("/login_facebook/callback", authentication_controller.passport_facebook_authenticate_callback)
router.post("/register", account_controller.register)


module.exports = router