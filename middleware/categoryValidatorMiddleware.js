const { categoryValidation } = require("../validation/categoryValidation");

exports.categoryMiddleware = (req, res, next) => {
    try {

        const { error } = categoryValidation(req.body)
        if (error) {
            return res.status(404).json({ message: "validatsiya xatoligi" })
        }
        next()
    } catch (error) {
        throw new Error(error.message);
    }
}