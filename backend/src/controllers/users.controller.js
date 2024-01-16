import methods from "../repository/base.js";

const table = "Users";

const getUsers = async (req,res)=>{
    await methods.getAll(req,res,table);
}

const getUser = async (req,res)=>{
    await methods.getOne(req,res,table);
}

const addUser = async (req,res) =>{
    await methods.addOne(req,res,table);
}

const updateUser = async (req,res) =>{
    await methods.updateOne(req,res,table);
}

const deleteUser = async (req,res)=>{
    await methods.deleteOne(req,res,table);
}

export default {
    getUsers,
    getUser,
    addUser,
    updateUser,
    deleteUser
}