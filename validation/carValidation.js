const joi = require("joi")

exports.carValidation = (data) => {
    try {
        let schema = joi.object({
            manufactoryDate: joi.date(),
            engine: joi.number(),
            color: joi.string(),
            kmTraveled: joi.number(),
            fuelType: joi.string(),
            transmissionBox: joi.string(),
            paintCondition: joi.string(),
            price: joi.string(),
            isAvailable: joi.string(),
            description: joi.string()
        })
        return schema.validate(data)
    } catch (error) {
        throw new Error(error.message);

    }
}