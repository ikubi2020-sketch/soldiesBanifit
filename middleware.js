import zod from "zod"

function logger(req, res, next) {
    console.log(req.method, req.url)
    next()
}


function errorHandler(err, res , req , next) {
    const statusCode = err.statusCode || 500
    console.error(err.message, statusCode)

    res.status(statusCode).json({"message" : "something went wrong"})
}

const validBenefitRequest = zod.object({
    "unit" :zod.string({message : "unit must be a string"}).min(2, "unit must be 2 characters").max(100, "unit must be less then 100 characters"),
    "benefit" : zod.string({message : "unit must be a string"}),
    "details" : zod.object,
    "decisionReason" : zod.string({message : "reason must be a string"}).min(2, "reason must be 2 characters"),
    "budgetApprove" : zod.boolean,
})


function validBenefitRequestFunc(req, res , next) {
    const result = validBenefitRequest.safeParse(req.body)
    if(!result.success) {return res.status(400).json(result.error.flatten().fieldErrors)}
    next()
};

const validBudget = zod.object({
    "unit" :zod.string({message : "unit must be a string"}).min(2, "unit must be 2 characters").max(100, "unit must be less then 100 characters"),
    "benefitType" : zod.string({message : "type must be a string"}),
    "month" : zod.string({message : "month must be a string"}),
    "allocateAmount": zod.int({message : "allocateAmount must be a int"})
})

function validBudgetFunc(req, res , next) {
    const result = validBudget.safeParse(req.body)
    if(!result.success) {return res.status(400).json(result.error.flatten().fieldErrors)}
    next()
};

const middleware ={ errorHandler, logger, validBenefitRequestFunc, validBudgetFunc}

export default middleware