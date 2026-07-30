import zod, { success } from "zod"

function logger(req, res, next) {
    console.log(req.method, req.url)
    next()
}


function errorHandler(err, req , res , next) {
    const statusCode = err.statusCode || 500
    console.error(err.message, statusCode);
    res.status(statusCode).json({success : false , message : "something went wrong"})
}



const benefitPeriod = zod.object({
    // "startDate" : zod.date({message : "startDate must be a data"}),
    // "endDate" : zod.date({message : "endDate must be a data"}),
    "decisionReason" : zod.string({message : "decisionReason must be a string"}),
    "decisionApproved": zod.boolean({message : "decisionApproved must be a boolean"}),
    "benefitType" : zod.enum(["giftCard", "diningHall"], {message : " benefitType must be giftCard or diningHall"}),
    "details" : zod.object()
    });


const validBenefitRequest = zod.object({
    "unit" : zod.string({message : "unit must be a string"}).min(2, "unit must be 2 characters").max(100, "unit must be less then 100 characters"),
    "currentBenefitType" : zod.enum(["giftCard", "diningHall"], {message : " currentBenefitType must be giftCard or diningHall"}),
    "history" : zod.array(benefitPeriod) 
    });

function  validBenefitRequestFunc(req, res , next) {
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


const validSpentRequest = zod.object({
   "amount" : zod.int({message : "amount must be an integer"}),
   "reason" : zod.string({message : "reason must be a string"}).min(2, "reason must be more then 2 characters")
})


function validSpentRequestFunc(req, res , next) {
    const result = validSpentRequest.safeParse(req.body)
    if(!result.success) {return res.status(400).json(result.error.flatten().fieldErrors)}
    next()
};



const middleware ={ errorHandler, logger, validBenefitRequestFunc, validBudgetFunc, validSpentRequestFunc}

export default middleware