var pos_model = module.exports
const conn = require("../config/database")
const util = require("util")
const query = util.promisify(conn.query).bind(conn)


pos_model.getList = async () =>{
  try
  {
    const sql_query = `select * from positions where position_active = 1`
    var results = await query(sql_query)
    if(results.length > 0)
    {
      const json = {success: true, data: results}
      const jsonstr = JSON.stringify(json)
      return jsonstr
    }
    else
    {
      const json = {success: false, data: 'Database has no positions yet'}
      const jsonstr = JSON.stringify(json)
      return jsonstr
    }
  }
  catch(err)
  {
    console.log('position_model.getList has error: ' + err.message)
    const json = {success: false, data: err.message}
    const jsonstr = JSON.stringify(json)
    return jsonstr
  }
}


pos_model.getByUser = async (userID) =>{
  try
  {
    const sql_query = `select * from positions where user_id = "` + userID + `"`
    var results = await query(sql_query)
    if(results.length > 0)
    {
      const json = {success: true, data: results[0]}
      const jsonstr = JSON.stringify(json)
      return jsonstr
    }
    else
    {
      const json = {success: false, data: 'Cannot find positions with user_id: ' + userID}
      const jsonstr = JSON.stringify(json)
      return jsonstr
    }
  }
  catch(err)
  {
    console.log('position_model.getByUser has error: ' + err.message)
    const json = {success: false, data: err.message}
    const jsonstr = JSON.stringify(json)
    return jsonstr
  }
}

pos_model.getByVehicle = async (vehicleID) =>{
    try
    {
      const sql_query = `select * from positions where vehicle_id = "` + vehicleID + `"`
      var results = await query(sql_query)
      if(results.length > 0)
      {
        const json = {success: true, data: results[0]}
        const jsonstr = JSON.stringify(json)
        return jsonstr
      }
      else
      {
        const json = {success: false, data: 'Cannot find positions with vehicle_id: ' + vehicleID}
        const jsonstr = JSON.stringify(json)
        return jsonstr
      }
    }
    catch(err)
    {
      console.log('position_model.getByVehicle has error: ' + err.message)
      const json = {success: false, data: err.message}
      const jsonstr = JSON.stringify(json)
      return jsonstr
    }
  }


pos_model.getDetail = async (posID) =>{
    try
    {
      const sql_query = `select * from positions where pos_id = "` + posID + `"`
      var results = await query(sql_query)
      if(results.length > 0)
      {
        const json = {success: true, data: results[0]}
        const jsonstr = JSON.stringify(json)
        return jsonstr
      }
      else
      {
        const json = {success: false, data: 'Cannot find positions with pos_id: ' + posID}
        const jsonstr = JSON.stringify(json)
        return jsonstr
      }
    }
    catch(err)
    {
      console.log('position_model.getDetail has error: ' + err.message)
      const json = {success: false, data: err.message}
      const jsonstr = JSON.stringify(json)
      return jsonstr
    }
  }

pos_model.changeToOn = async (data) =>{
    try
    {
      var sql = "UPDATE positions SET user_id = ?, vehicle_id = ?, status ='1' WHERE pos_id = ?"
      data_list = [data.user_id, data.vehicle_id, data.pos_id]
      results = await query(sql,data_list)
      if(results.affectedRows>0)
      {
        const json = {success: true, data: results}
        const jsonstr = JSON.stringify(json)
        return jsonstr
      }
      else
      {
        const json = {success: false, data: results}
        const jsonstr = JSON.stringify(json)
        return jsonstr
      }
    }
    catch(err)
    {
      console.log('position_model.changeToOn has error: ' + err.message)
      const json = {success: false, data: err.message}
      const jsonstr = JSON.stringify(json)
      return jsonstr
    }
  }


pos_model.changeToOff = async (data) =>{
    try
    {
        var sql = "UPDATE positions SET status ='0' WHERE pos_id = ?"
        data_list = [data.pos_id]
        results = await query(sql,data_list)
      if(results.affectedRows>0)
      {
        const json = {success: true, data: results}
        const jsonstr = JSON.stringify(json)
        return jsonstr
      }
      else
      {
        const json = {success: false, data: results}
        const jsonstr = JSON.stringify(json)
        return jsonstr
      }
    }
    catch(err)
    {
      console.log('position_model.changeToOff has error: ' + err.message)
      const json = {success: false, data: err.message}
      const jsonstr = JSON.stringify(json)
      return jsonstr
    }
  }