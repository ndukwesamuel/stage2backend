const express = require("express");
const {
  createPerson,
  getAllPersons,
  getSinglePerson,
  updategetSinglePerson,
  DeleteSinglePerson,
} = require("../controllers/personcontrollers");
const router = express.Router();

router.route("/").post(createPerson).get(getAllPersons);

router
  .route("/:user_id")
  .get(getSinglePerson)
  .patch(updategetSinglePerson)
  .delete(DeleteSinglePerson);

module.exports = router;
