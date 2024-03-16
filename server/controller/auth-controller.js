const Users = require('../model/registration-modal');
const home = async (req,res)=>{
    try {
        const a = await Users.find();
        console.log(a)
        res.status(200).json(a);
    } catch (error) {
        res.status(400).json(error);
    }
}

const registration = async (req,res)=>{
    try{
        console.log(req.body)
        await Users.create(req.body);
        return res.status(200).json("Registration Successful");
    }catch(error){
        res.status(400).json(error);
    }
}

const login = async (req,res) =>{
    try {
        console.log(req.body);
        const {email,password} =req.body;
        const user = await Users.findOne({email,password})
        console.log(user)
        res.status(200).json(user);
    } catch (error) {
        console.log(error)
    }
}

const Delete = async (req,res) =>{
    try {
        const id = req.params.id;
        console.log("Delete "+id);
        const response = await Users.deleteOne({_id:id});
        console.log(response)
        res.status(200).json(response);
    } catch (error) {
        console.log(error)
    }
}

const edit = async (req,res) =>{
    try {
        const id = req.params.id;
        console.log("Edit "+id);
        console.log(req.body)
        const editUser = await Users.findOneAndUpdate({_id:id},req.body,{
            new:true,
        });
        console.log(editUser);
        res.status(200).json(editUser);
    } catch (error) {
        console.log(error)
    }
}

module.exports = {home,registration,login,Delete,edit};