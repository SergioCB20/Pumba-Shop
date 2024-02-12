import methods from "../repository/base.js";
import getConnection from "../database/database.js";
import jwt from "jsonwebtoken";
import config from "../config.js";

const table = "Users";

//CRUD

const getUsers = async (req,res)=>{
    const result = await methods.getAll(req,res,table);
    result?res.json(result):res.status(500).send(error.message);
}

const getUser = async (req,res)=>{
    const id = "id_usuario"
    const result = await methods.getOne(req,res,table,id);
    result?res.json(result):res.status(500);
}

const addUser = async (req,res) =>{
    const result = await methods.addOne(req,res,table);
    result?res.json({ success: true, message: 'Registro insertado correctamente' }):res.status(500);
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
          delete usuario.password
          jwt.sign({usuario},config.secretcode,(err,token)=>{
            if (err) {
              console.error('Error al firmar el token:', err);
              res.status(500).send(err.message);
          } else {
            console.log(token)
              res.status(200).json({ token });
          }
          })
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