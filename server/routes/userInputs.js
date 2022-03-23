const router = require('express').Router();


module.exports = (db) => {
  // all routes will go here 
  router.get('/', (req, res) => {
    const command = "SELECT user_inputs.*, cities.*, users.* FROM user_inputs INNER JOIN cities ON cities.id = city_id INNER JOIN users ON users.id = user_id";
    db.query(command).then(data => {
      res.json(data.rows);
    })
  });

  router.put('/', (req, res) => {
    console.log("heyheyhey", req.body)
    const inputs = req.body;
    const rating = 4;
    const command = `INSERT INTO user_inputs(user_id, city_id, comment, rating) VALUES($1, $2, $3, $4) RETURNING *`;
    db.query(command, [inputs.id, inputs.city_id, inputs.comment, rating]).then(data => {
      res.json(data.rows);
    })
  })

  return router;
}