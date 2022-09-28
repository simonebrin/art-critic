const router = require("express").Router();
const { Eval } = require("../../models");

router.get("/", (req, res) => {
  // find all evals
  Eval.findAll()
    .then(function (evals) {
      res.json(evals);
    })
    .catch(function (error) {
      console.error(error);
      res.status(500).json(error);
    });
});

router.get("/:id", (req, res) => {
  // find one eval by its `id` value
  Eval.findByPk(req.params.id)
    .then(function (eval) {
      res.json(eval);
    })
    .catch(function (error) {
      console.error(error);
      res.status(500).json(error);
    });
});

router.post("/", (req, res) => {
  console.log("----------hit post route for eval------------");
  // create a new eval
  Eval.create({
    eval_value: req.body.eval_value,
    art_id: req.body.art_id,
    user_id: req.session.userId,
  })
    .then((eval) => res.json(eval))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  // update an eval by its `id` value
  Eval.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((eval) => res.json(eval))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  // delete an eval by its `id` value
  Eval.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((eval) => res.json(eval))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;