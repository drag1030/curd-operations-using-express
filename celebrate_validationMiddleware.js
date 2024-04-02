const { celebrate } = require('celebrate');
const validationSchema = require('./celebrate_validationSchema');

const validationMiddleware = celebrate(validationSchema);

module.exports = validationMiddleware;
