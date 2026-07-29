import zod from "zod"

function logger(req, res, next) {
    console.log(req.method, req.url)
    next()
}


function errorHandler(err, res , req , next) {
    const statusCode = err.statusCode || 500
    console.error(err.message, statusCode)

    res.statusCode(statusCode).json({message : "something went wrong"})
}

const validBenefitRequest = zod.object({
    "unit" :zod.string({message : "unit must be a string"}).min(2, "unit must be 2 characters").max(100, "unit must be less then 100 characters"),
    "benefit" : zod.string({message : "unit must be a string"}).includes(["giftCard", "diningHall"]),
    "details" : zod.object,
    "decisionReason" : zod.string({message : "reason must be a string"}).min(2, "reason must be 2 characters"),
    "budgetApprove" : zod.boolean,
})

const middleware ={ errorHandler, logger, validBenefitRequest}

export default middleware