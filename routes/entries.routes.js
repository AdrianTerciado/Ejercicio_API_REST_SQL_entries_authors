const router = require('express').Router();
const entriesController = require("../controllers/entries.controller");

router.get('/', entriesController.getEntries);
router.post('/', entriesController.createEntry);
router.put('/', entriesController.updateEntry);
router.delete('/:title', entriesController.deleteEntries);

module.exports = router;