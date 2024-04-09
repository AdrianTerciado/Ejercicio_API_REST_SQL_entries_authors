const entry = require('../models/entries.model');

// GET http://localhost:3000/api/entries --> ALL
// GET http://localhost:3000/api/entries?email=alejandru@thebridgeschool.es --> por email
// GET http://localhost:3000/api/entries?email=jabier@thebridgeschool.es --> por email
// GET http://localhost:3000/api/entries?email=guillermu@thebridgeschool.es
const getEntries = async (req, res) => {
    let entries;
    if (req.query.email) {
        entries = await entry.getEntriesByEmail(req.query.email);
    }
    else {
        entries = await entry.getAllEntries();
    }
    res.status(200).json(entries);
}


// POST
// http://localhost:3000/api/entries/
/* {
    "title": "Lluvias en Arganda",
    "content": "¿Se volverá a inundar?",
    "email":"jabier@thebridgeschool.es",
    "category":"Tiempo"
} */
const createEntry = async (req, res) => {
    const newEntry = req.body;
    const response = await entry.createEntry(newEntry);
    res.status(200).json({
        "items_created": response,
        data: newEntry
    });
}

// PUT
/* {
    "title": "Lluvias torrenciales en Arganda",
    "content": "Se volvió a inundar",
    "date":  "2024-04-05T23:00:00.000Z",
    "category":"Tiempo",
    "email": "jabier@thebridgeschool.es",
    "old_title": "Lluvias en Arganda"
} */
const updateEntry = async (req, res) => {
    const modifiedEntry = req.body;
    const response = await entry.updateEntry(modifiedEntry);
    res.status(200).json({
        "items_updated": response,
        data: modifiedEntry
    });
}

// DELETE
// http://localhost:3000/api/entries/Lluvias
const deleteEntries = async (req, res) => {
    if (req.params.title) {
        await entry.deleteEntriesByTitle(req.params.title);
        res.status(200).json({
            "item_deleted": `${req.params.title}`
        })
    } else {
        res.status(400), json({
            "error": "No titulo, no delete"
        });
    }
}

module.exports = {
    getEntries,
    createEntry,
    updateEntry,
    deleteEntries
}