const Joi = require("joi");

module.exports = schema => (req, res, next) => {

  const request = Object.keys(req.body).includes('location') ? {...req.body, location : JSON.parse(req.body.location)} : req.body;

  const result = schema.validate(request);

  if (result.error)
    return (res.status(400).send({ error: result.error.details[0].message }), console.log(result.error.details[0].message));

  next();
};
