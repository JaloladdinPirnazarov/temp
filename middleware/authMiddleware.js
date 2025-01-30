const jsonwebtoken = require('jsonwebtoken')
class AuthMiddleware {
    async tokenCheck(req, res, next) {
        try {
            const authorizationHeader = req.headers.authorization
            if (!authorizationHeader)
                return res.status(401).json({ message: 'Unauthorized1' })
            const accessToken = authorizationHeader.split(' ')[1]
            if (!accessToken)
                return res.status(401).json({ message: 'Unauthorized2' })
            const userData = jsonwebtoken.verify(accessToken, process.env.ACCESS_SEKRET)
            if (!userData)
                return res.status(401).json({ message: 'Unauthorized3' })

            req.user = userData
            next()
        } catch (error) {
            return res.status(404).json({ message: error.message })
        }
    }

    async roleCheck(req, res, next) {
        try {
            if (req.user.role !== "admin")
                return res.status(403).json({ message: 'Forbidden' })
            next()
        } catch (error) {
            return res.status(403).json({ message: error.message })
        }
    }
}

module.exports = new AuthMiddleware()