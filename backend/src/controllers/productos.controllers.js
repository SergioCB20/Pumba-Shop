import methods from "../repository/base.js";
import getConnection from "../database/database.js";


const table = "productos"

const getProducts = async (req,res)=>{
    const result = await methods.getAll(req,res,table);
    const connection = await getConnection();
    for(const prod of result){
        const nombreMarca = await connection.query(`SELECT razon_social FROM marca WHERE ID_marca = ?`,[prod.ID_marca]);
        const nombreCategoria = await connection.query(`SELECT nombre FROM categoria WHERE ID_categoria = ?`,[prod.ID_categoria]);
        prod.nombreMarca = nombreMarca[0].razon_social;
        prod.nombreCategoria = nombreCategoria[0].nombre;
    }
    console.log(result)
    result?res.json(result):res.status(500)
}

export default {
    getProducts
}