const { carValidation } = require("../validation/carValidation");

exports.carMiddleware = (req, res, next) => {
    try {

        const { error } = carValidation(req.body)
        if (error) {
            return res.status(404).json({ message: "validatsiya xatoligi" })
        }
        next()
    } catch (error) {
        throw new Error(error.message);
    }
}