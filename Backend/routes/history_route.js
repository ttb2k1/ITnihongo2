const express = require("express")
const router = express.Router()
const history_controller = require("../controllers/history_controller")


router.get("/getallhistories",history_controller.getAllHistories)


module.exports = router