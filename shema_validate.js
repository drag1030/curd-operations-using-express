const Joi = require('@hapi/joi')

const authSchema = Joi.object({
    email:Joi.string().email().lowercase().required(),
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),

})

const sheema = Joi.object({
    id: Joi.number().required(),
})

module.exports =
    { authSchema,sheema}


