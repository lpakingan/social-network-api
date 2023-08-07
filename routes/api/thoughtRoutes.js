const router = require("express").Router();

// all the get/post/put/delete functions required from the thought controller file
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thoughtController");

// /api/thoughts
// either get all thoughts or create a new thought
router.route("/").get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
// either get a single thought, update a thought, or delete a thought with the ID
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
// either add or delete a reaction within the specified thought's reaction field
router.route("/:thoughtId/reactions").post(addReaction).delete(removeReaction);

module.exports = router;
