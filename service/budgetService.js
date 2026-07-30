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
    }};




async function AddBenifitsServ(spendRequest,id) {
    try {
         console.log("enter service AddBenifitsServ");
        const result =  await budgetDal.checkForBudgetId(id)
        if(!result) {throw new Error, "not found any budget with this ID"}
        const unitBudget = result[0].allocatedAmount
        const allUnitSpends = await budgetDal.geAllSpendsById(id)
        const unitSpending = allUnitSpends.reduce(sumSpendingUnit, 0)
        if(unitSpending + spendRequest.amount > unitBudget) {throw new Error, "unit out of budget"}
        const resultBenefit = await budgetDal.addSpend(spendRequest, id)
        return resultBenefit
    } catch (error) {
        console.log(error);
        throw error
    }};

function sumSpendingUnit(totalSpending, oneSpend) {return totalSpending + oneSpend.amount}

const budgetService = {addUnitBudgetServ, getBenifitsServ, AddBenifitsServ}

export default budgetService