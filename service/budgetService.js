import budgetDal from "../dal/budgetDal.js";

async function addUnitBudgetServ (budgetRequest){
    try {
        console.log("enter service")
        const result = await budgetDal.addUnitBudget(budgetRequest)
        return result
    } catch (error) {
        console.log(error);
        throw error
    }};

async function getBenifitsServ(getParams) {
    try {
        const result = await budgetDal.getBenifitsByParam(getParams)
        return result
    } catch (error) {
        console.log(error);
        throw error
    }
}

const budgetService = {addUnitBudgetServ, getBenifitsServ}

export default budgetService