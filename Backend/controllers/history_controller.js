var history_controller = module.exports
const history_model = require("../models/history_model")
const moment = require("moment")

history_controller.getAllHistories = async (req,res)=>{
  try
  {
    const jsonstr = await history_model.getAllHistories()
    const json = JSON.parse(jsonstr)
    for(i=0;i<json.data.length;i++)
    {
      let date1 = moment.utc(json.data[i].checkin_time).local();
      const new_checkin_time = date1.format('YYYY-MM-DD HH:mm:ss')
      json.data[i].checkin_time = new_checkin_time

      let date2 = moment.utc(json.data[i].checkout_time).local();
      const new_checkout_time = date2.format('YYYY-MM-DD HH:mm:ss')
      json.data[i].checkout_time = new_checkout_time
    }

    res.json(json)
  }
  catch(err)
  {
    console.log('history_controller.getAllHistories has error: ' + err.message)
    res.json({success: false, data: err.message})
  }
}