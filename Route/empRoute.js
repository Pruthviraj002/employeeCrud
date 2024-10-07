const {getEmp,postEmp,putEmp,deleteEmp} = require("../Controller/empCon")

const route = require("express").Router()

route.get("/",getEmp)
route.post("/",postEmp)
route.put("/:id",putEmp)
route.delete("/:id",deleteEmp)


module.exports = route
