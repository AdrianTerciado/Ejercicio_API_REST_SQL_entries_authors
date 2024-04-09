const pool = require("../config/db_pgsql");
const queries = require("../queries/entries.queries");

// GET
const getEntriesByEmail = async (email) => {
  let client, result;
  try {
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(queries.getEntriesByEmail, [email]);
    result = data.rows;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

const getAllEntries = async () => {
  let client, result;
  try {
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(queries.getAllEntries);
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
const createEntry = async (entry) => {
  const { title, content, email, category } = entry;
  let client, result;
  try {
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(queries.createEntry, [
      title,
      content,
      email,
      category,
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
const updateEntry = async (entry) => {
  const { title, content, date, category, email, old_title } = entry;
  let client, result;
  try {
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(queries.updateEntry, [
      title,
      content,
      date,
      category,
      email,
      old_title
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
const deleteEntriesByTitle = async (title) => {
  let client, result;
  try {
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(queries.deleteEntriesbyTitle, [title]);
    result = data.rows;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
}

/* const deleteAllEntries = async (req, res) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.deleteAllEntries);
        result = data.rows;
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
} */

const entries = {
  getEntriesByEmail,
  getAllEntries,
  createEntry,
  updateEntry,
  deleteEntriesByTitle
};

module.exports = entries;