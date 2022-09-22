const sequelize = require("../config/config");
const { Eval } = require("../models/index");

async function seedEval() {
  await Eval.create({
    eval_value: "$500.00 / Joe",
    art_id: 1,
    user_id: 2,
  });
  await Eval.create({
    eval_value: "$125.00 / Jim",
    art_id: 2,
    user_id: 1,
  });
  await Eval.create({
    eval_value: "$1,000.00 / Joe",
    art_id: 3,
    user_id: 2,
  });
  await Eval.create({
    eval_value: "$55.00 / Jim",
    art_id: 4,
    user_id: 1,
  });
    await Eval.create({
      eval_value: "$1,000.00 / Jordan",
      art_id: 1,
      user_id: 1,
    });
  console.log("=======eval Seeded=======");
}

module.exports = seedEval;
