const router = require("express").Router();
const { Comment } = require("../../models");

router.get("/", (req, res) => {
  // find all comments
  Comment.findAll()
    .then(function (comments) {
      res.json(comments);
    })
    .catch(function (error) {
      console.error(error);
      res.status(500).json(error);
    });
});

router.get("/:id", (req, res) => {
  // find one comment by its `id` value
  Comment.findByPk(req.params.id)
    .then(function (comment) {
      res.json(comment);
    })
    .catch(function (error) {
      console.error(error);
      res.status(500).json(error);
    });
});

router.post("/", (req, res) => {
  console.log("hit post route for comment");
  // create a new comment
  Comment.create({
    comment_text: req.body.comment_text,
    art_id: req.body.art_id,
    user_id: req.session.userId,
  })
    .then((comment) => res.json(comment))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  // update a comment by its `id` value
  Comment.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((comment) => res.json(comment))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  // delete a comment by its `id` value
  Comment.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((comment) => res.json(comment))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
