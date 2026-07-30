import  budgetService from "../service/budgetService.js"

async function addUnitBudgetCtrl(req, res) {
    try {
        const budgetRequest = req.body
        const result = await budgetService.addUnitBudgetServ(budgetRequest)
        res.status(200).json({message : "success" , "result" : result})
    } catch (error) {
        console.log(error)  
        res.status(400).json("something went wrong")
    }
}


async function getBenifitsByParamCtrl(req, res) {
    console.log("enter getBenifitsByParamCtrl")
    try {
        const result = await budgetService.getBenifitsServ(req.query)
        if(result.length === 0) {res.status(200).json({message : "success" , "result" : "nothing mech your query"})}
        res.status(200).json({message : "success" , "result" : result})
    } catch (error) {
        console.log(error)  
        res.status(400).json("something went wrong")
    }
}


async function addSpentCtrl(req, res) {
    console.log("enter getBenifitsByParamCtrl")
    try {
        const {id} = req.params
        const  data  = req.body
        console.log(data)
        const result = await budgetService.AddBenifitsServ(data, id)
        res.status(200).json({message : "success" , "result" : result})
    } catch (error) {
        console.log(error)  
        res.status(400).json("something went wrong")
    }
}


async function getSpentByIdCtrl(req, res) {
    console.log("enter getSpentCtrl")
    try {
        const {id} = req.params
        const result = await budgetService.getSpendsByIdServ(id)
        if(!result){res.status(404).json("not found any spending for with this Id")}
        res.status(200).json({message : "success" , "result" : result})
    } catch (error) {
        console.log(error)  
        res.status(400).json("something went wrong")
    }
}



const ctrlBudget = {addUnitBudgetCtrl, getBenifitsByParamCtrl, addSpentCtrl, getSpentByIdCtrl}

export default ctrlBudget