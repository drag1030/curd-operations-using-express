const { Joi } = require('celebrate');

const validationSchema = {
    body: Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        age:Joi.number().required()
    }),
};

module.exports = validationSchema;
