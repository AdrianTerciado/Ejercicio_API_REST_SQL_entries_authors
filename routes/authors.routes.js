const router = require("express").Router();
const authorsController = require("../controllers/authors.controller");

router.get('/', authorsController.getAuthors);
router.post('/', authorsController.createAuthor);
router.put('/', authorsController.updateAuthor);
router.delete('/:email', authorsController.deleteAuthor);

module.exports = router;