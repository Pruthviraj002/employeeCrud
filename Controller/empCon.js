const employee = require("../Model/emp")

exports.getEmp = async(req,res)=>{
    try {
        const data =await employee.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.postEmp = async(req,res)=>{
    try {
        const data = await employee.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return  res.status(400).json({errors:true,message:error.message})
    }
}

exports.putEmp = async (req,res)=>{
    try {
        const data = await employee.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})

    }
}


exports.deleteEmp = async(req,res)=>{
    try {
        const data = await employee.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}