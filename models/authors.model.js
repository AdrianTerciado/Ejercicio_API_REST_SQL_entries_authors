const pool = require("../config/db_pgsql");
const queries = require("../queries/authors.queries");

// GET
const getAuthorByEmail = async (email) => {
  let client, result;
  try {
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(queries.getAuthorByEmail, [email]);
    result = data.rows;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

const getAllAuthors = async () => {
  let client, result;
  try {
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(queries.getAllAuthors);
    result = data.rows;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

// CREATE
const createAuthor = async (author) => {
  const { name, surname, email, image } = author;
  let client, result;
  try {
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(queries.createAuthor, [
      name,
      surname,
      email,
      image
    ]);
    result = data.rowCount;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

//UPDATE
const updateAuthor = async (author) => {
  const { name, surname, email, image, old_name } = author;
  let client, result;
  try {
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(queries.updateAuthor, [
      name, 
      surname, 
      email, 
      image, 
      old_name
    ]);
    result = data.rowCount;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

// DELETE
const deleteAuthorByEmail = async (name) => {
  let client, result;
  try {
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(queries.deleteAuthorByEmail, [name]);
    result = data.rowCount;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
}

const authors = {
  getAuthorByEmail,
  getAllAuthors,
  createAuthor,
  updateAuthor,
  deleteAuthorByEmail
};

module.exports = authors;