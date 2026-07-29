import zod from "zod"

function logger(req, res, next) {
    console.log(req.method, req.url)
    next()
}


function errorHandler(err, res , req , next) {
    const statusCode = req.statusCode || 500
    console.error(err.message, statusCode)
    res.statusCode(statusCode).json("soothing went wrong")
}

const middleware ={ errorHandler, logger}

export default middleware