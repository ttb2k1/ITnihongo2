var veh_model = module.exports
const conn = require("../config/database")
const util = require("util")
const uuid = require("uuid")
const query = util.promisify(conn.query).bind(conn)


veh_model.getAllVeh = async () =>{
  try
  {
    const sql_query = `SELECT * FROM vehicles WHERE vehicle_id = 'veh01'`
    var result = await query(sql_query)
    if(result.length > 0)
    {
      const json = {success: true, data: result}
      const jsonstr = JSON.stringify(json)
      return jsonstr
    }
    else
    {
      const json = {success: false, data: 'Database has already empty.'}
      const jsonstr = JSON.stringify(json)
      return jsonstr
    }
  }
  catch(err)
  {
    console.log('getAllVeh has error: ' + err.message)
    const json = {success: false, data: err.message}
    const jsonstr = JSON.stringify(json)
    return jsonstr
  }
}


veh_model.getVehByType = async (type) =>{
  try
  {
    const sql_query = `SELECT * FROM vehicles WHERE vehicle_type = '` + type + `'`
    var result = await query(sql_query)
    if(result.length > 0)
    {
      const json = {success: true, data: result}
      const jsonstr = JSON.stringify(json)
      return jsonstr
    }
    else
    {
      const json = {success: false, data: 'Cannot find any vehicle by this type: ' + type}
      const jsonstr = JSON.stringify(json)
      return jsonstr
    }
  }
  catch(err)
  {
    console.log('getVehByType has error: ' + err.message)
    const json = {success: false, data: err.message}
    const jsonstr = JSON.stringify(json)
    return jsonstr
  }
}


veh_model.insertVeh = async (veh) =>{
  try
  {
    var sql = 'INSERT INTO vehicles (vehicle_id, vehicle_type, vehicle_plates, vehicle_color) VALUES ?'
    new_veh = [uuid.v4(), veh.type, veh.plate, veh.color]
    result = await query(sql,new_veh)
    if(result.affectedRows>0)
    {
      const json = {success: true, data: result}
      const jsonstr = JSON.stringify(json)
      return jsonstr
    }
    else
    {
      const json = {success: false, data: result}
      const jsonstr = JSON.stringify(json)
      return jsonstr
    }
  }
  catch(err)
  {
    console.log('insertVeh has error: ' + err.message)
    const json = {success: false, data: err.message}
    const jsonstr = JSON.stringify(json)
    return jsonstr
  }
}


veh_model.updateVeh = async (veh) =>{
  try
  {
    var sql = "UPDATE vehicles SET vehicle_type = ?, vehicle_plates = ?, vehicle_color = ?, active = ? WHERE vehicle_id = ?"
    new_veh = [veh.type, veh.plate, veh.color, veh.active, veh.id]
    result = await query(sql,new_veh)
    if(result.affectedRows>0)
    {
      const json = {success: true, data: result}
      const jsonstr = JSON.stringify(json)
      return jsonstr
    }
    else
    {
      const json = {success: false, data: result}
      const jsonstr = JSON.stringify(json)
      return jsonstr
    }
  }
  catch(err)
  {
    console.log('updateVeh has error: ' + err.message)
    const json = {success: false, data: err.message}
    const jsonstr = JSON.stringify(json)
    return jsonstr
  }
}


veh_model.deleteVeh = async (veh) =>{
  try
  {
    var sql = "UPDATE vehicles SET active = 0 WHERE vehicle_id = ?"
    del = [veh.vehicle_id]
    result = await query(sql,del)
    if(results.affectedRows>0)
    {
      const json = {success: true, data: result}
      const jsonstr = JSON.stringify(json)
      return jsonstr
    }
    else
    {
      const json = {success: false, data: result}
      const jsonstr = JSON.stringify(json)
      return jsonstr
    }
  }
  catch(err)
  {
    console.log('deleteVeh has error: ' + err.message)
    const json = {success: false, data: err.message}
    const jsonstr = JSON.stringify(json)
    return jsonstr
  }
}