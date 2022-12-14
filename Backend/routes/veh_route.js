const express = require("express")
const router = express.Router()
const veh_controller = require("../controllers/veh_controller")


router.get("/getallvehs",veh_controller.getAllVeh)
router.post("/getvehbyvehid",veh_controller.getVehByVehId)
router.post("/getvehbytype",veh_controller.getVehByType)
router.post("/insertveh",veh_controller.insertVeh)
router.put("/updateveh",veh_controller.updateVeh)
router.delete("/deleteveh",veh_controller.deleteVeh)

module.exports = router