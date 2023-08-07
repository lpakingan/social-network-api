const router = require("express").Router();
// all the get/post/put/delete functions required from the user controller file
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/userController");

// /api/users
// either get all users or create a new user
router.route("/").get(getUsers).post(createUser);

// /api/users/:userId
// either get a single user, update a user, or delete a user with the ID
router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId
// either add a friend or delete a friend with the friend ID from the given user ID's friend array
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;
