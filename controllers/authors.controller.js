const authorModel = require('../models/authors.model');

// GET http://localhost:3000/api/authors --> ALL
// GET http://localhost:3000/api/authors?email=alejandru@thebridgeschool.es --> por email
// GET http://localhost:3000/api/authors?email=jabier@thebridgeschool.es --> por email
// GET http://localhost:3000/api/authors?email=guillermu@thebridgeschool.es
const getAuthors = async (req, res) => {
    let authors;
    if (req.query.email) {
        authors = await authorModel.getAuthorByEmail(req.query.email);
    }
    else {
        authors = await authorModel.getAllAuthors();
    }
    res.status(200).json(authors);
}


// POST
// http://localhost:3000/api/entries/
/* {
    "name": "Adrián",
    "surname": "Terciado",
    "email":"adriano@thebridgeschool.es",
    "image":"https://randomuser.me/api/portraits/thumb/men/36.jpg"
} */
const createAuthor = async (req, res) => {
    const newAuthor = req.body;
    const response = await authorModel.createAuthor(newAuthor);
    res.status(200).json({
        "items_created": response,
        data: newAuthor
    });
}

// PUT
/* {
    "name": "Jano",
    "surname":"Fernández",
    "email":"jano@thebridgeschool.es",
    "image":"https://randomuser.me/api/portraits/thumb/men/47.jpg",
    "old_name": "Anthony"
} */
const updateAuthor = async (req, res) => {
    const modifiedAuthor = req.body;
    const response = await authorModel.updateAuthor(modifiedAuthor);
    res.status(200).json({
        "items_updated": response,
        data: modifiedAuthor
    });
}

// DELETE
// http://localhost:3000/api/authors/jano@thebridgeschool.es
const deleteAuthor = async (req, res) => {
        if (req.params.email) {
            await authorModel.deleteAuthorByEmail(req.params.email);
            res.status(200).json({
                "author_deleted": `${req.params.email}`
            });
        } else {
            res.status(400), json({
                "error": "No author, no delete"
            });
        }
}

module.exports = {
        getAuthors,
        createAuthor,
        updateAuthor,
        deleteAuthor 
    }