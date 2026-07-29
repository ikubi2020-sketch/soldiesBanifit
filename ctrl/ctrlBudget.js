import  budgetService from "../service/budgetService.js"

async function addUnitBudgetCtrl(req, res) {
    try {
        const budgetRequest = req.body
        const result = await budgetService.addUnitBudgetServ(budgetRequest)
        res.status(200).json({message : "success" , "result" : result})
    } catch (error) {
        console.log(error)  
        res.status(400).json(message)
    }
}


async function getBenifitsByParamCtrl(req, res) {
    console.log("enter getBenifitsByParamCtrl")
    try {
        console.log(req.query)
        const result = await budgetService.getBenifitsServ(req.query)
        if(!result) {res.status(200).json({message : "success" , "result" : "nothing mech your query"})}
        res.status(200).json({message : "success" , "result" : result})
    } catch (error) {
        console.log(error)  
        res.status(400).json(message)
    }
}

const ctrlBudget = {addUnitBudgetCtrl, getBenifitsByParamCtrl}

export default ctrlBudget