import methods from "../repository/base.js";
import getConnection from "../database/database.js";

const table = "Users";

//CRUD

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

//Login

const verifyUser = async (req ,res)=>{
    try {
        const { body } = req;
        const connection = await getConnection();
    
        const [rows] = await connection.query('SELECT * FROM users WHERE email = ? AND password = ?', [body.email, body.password]);


        if (rows) {
          const usuario = rows;
          console.log(usuario)
          res.status(200).json(usuario);
        } else {
          console.log('No se encontraron resultados');
          res.status(401).json({ success: false, message: 'Credenciales incorrectas' });
        }
      } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
      }
}

export default {
    getUsers,
    getUser,
    addUser,
    updateUser,
    deleteUser,
    verifyUser
}