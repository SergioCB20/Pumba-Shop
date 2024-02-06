import methods from "../repository/base.js";

const table = "productos"

const getProducts = async (req,res)=>{
    await methods.getAll(req,res,table);
}

export default {
    getProducts
}