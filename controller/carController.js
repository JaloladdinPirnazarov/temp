const carModel = require("../schema/carSchema")

const addCar = async (req, res, next) => {
    try {
        const { carName, manufactoryDate, engine, color, kmTraveled, fuelType, transmissionBox, paintCondition, price, isAvailable, description } = req.body
        await carModel.create({ carName, manufactoryDate, engine, color, kmTraveled, fuelType, transmissionBox, paintCondition, price, isAvailable, description })
        return res.status(200).json({ message: "mashinalar ro'yhatga muaffaqiyatli qoshildi" })

    } catch (error) {
        return res.status(500).json(error.message)
    }
}
const getCar = async (req, res, next) => {
    try {
        const cars = await carModel.find()
        if (!cars) {
            return res.status(400).json({ message: "mashinalar topilmadi" })
        }
        return res.status(200).json({ message: "bozordagi mashinalar ro'yhati", cars })

    } catch (error) {
        next(error)
    }
}
const updateCar = async (req, res, next) => {
    try {
        const { _id } = req.params
        const { carName, manufactoryDate, engine, color, kmTraveled, fuelType, transmissionBox, paintCondition, price, isAvailable, description } = req.body
        const foundetCar = await carModel.findOneAndUpdate({ _id }, { carName, manufactoryDate, engine, color, kmTraveled, fuelType, transmissionBox, paintCondition, price, isAvailable, description }, { new: true })

        if (!foundetCar) {
            return res.status(400).json({ message: "siz qidirayotgan mashina topilmadi" })
        }
        return res.status(200).json({ message: "mashina malumotlari yangilandi", foundetCar })
    } catch (error) {
        next(error)
    }
}
const deleteCar = async (req, res, next) => {
    try {
        const { _id } = req.params
        const deleteCar = await carModel.findOneAndDelete({ _id })
        if (!deleteCar) {
            return res.status(404).json({ message: "mashina topilmadi" })
        }
        return res.status(200).json({ message: "mashina bazadan muaffaqiyatli o'chirildi" })
    } catch (error) {
        next(error)
    }
}
module.exports = { addCar, getCar, updateCar, deleteCar }
