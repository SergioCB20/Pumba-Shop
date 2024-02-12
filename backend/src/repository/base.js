import getConnection from "../database/database.js";

const getAll = async (req, res, table) => {
  try {
    const connection = await getConnection();
    const result = await connection.query(`SELECT * FROM ${table}`);
   return result;
  } catch (error) {
    return false;
  }
};

const getOne = async (req, res, table, idTable) => {
  console.log(req.params);
  const { id } = req.params;
  try {
    const connection = await getConnection();
    const result = await connection.query(`SELECT * FROM ${table} WHERE ${idTable} = ?`, [id]);
    return result;
  } catch (error) {
    return false;
  }
};


const addOne = async (req, res, table) => {
  try {
    const { body } = req;
    const connection = await getConnection();
    const result = await connection.query(`INSERT INTO ${table} SET ?`, [body]);
    return result;
  } catch (error) {
    res.status(500).send(error.message);
    return false;
  }
};

const updateOne = async (req, res, table) => {
    try {
      const { id } = req.params;
      const { body } = req;
      const connection = await getConnection();
      const result = await connection.query(`UPDATE ${table} SET ? WHERE id_usuario = ?`, [body, id]);
      if (result.affectedRows === 0) {
        return res.status(404).json({ success: false, message: 'Registro no encontrado' });
      }
  
      console.log(result);
      res.json({ success: true, message: 'Registro actualizado correctamente' });
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

  const deleteOne = async (req, res, table) => {
    try {
      const { id } = req.params;
      const connection = await getConnection();
      const result = await connection.query(`DELETE FROM ${table} WHERE id_usuario = ?`, [id]);
      if (result.affectedRows === 0) {
        return res.status(404).json({ success: false, message: 'Registro no encontrado' });
      }
  
      console.log(result);
      res.json({ success: true, message: 'Registro eliminado correctamente' });
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

export const methods = {
  getAll,
  getOne,
  addOne,
  updateOne,
  deleteOne
};


export default methods;

