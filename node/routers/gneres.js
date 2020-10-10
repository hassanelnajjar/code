const router = require("express").Router();
const { getAllGenres, getGenre } = require("../controllers/genres");

router.get("/", getAllGenres);
router.get("/:id", getGenre);

module.exports = router;
