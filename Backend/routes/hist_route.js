<<<<<<< HEAD
const express = require("express")
const router = express.Router()
const hist_controller = require("../controllers/hist_controller")


router.get("/list", hist_controller.getList)
router.get("/detail", hist_controller.historyDetail)
router.post("/detailVeh", hist_controller.vehDetail)

=======
const express = require("express")
const router = express.Router()
const hist_controller = require("../controllers/hist_controller")


router.get("/list", hist_controller.getList)
router.get("/detail", hist_controller.historyDetail)
router.post("/detailVeh", hist_controller.vehDetail)

>>>>>>> 37205f6a8f2c5d75004f2507796773656a5ab819
module.exports = router