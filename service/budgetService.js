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
        console.log(unitBudget)
        const allUnitSpends = await budgetDal.geAllSpendsById(id)
        const unitSpending = allUnitSpends.reduce((totalSpending, oneSpend)=>{return totalSpending + oneSpend.amount})
        if(unitSpending + spendRequest.amount > unitBudget) {throw new Error, "unit out of budget"}
        const resultBenefit = await budgetDal.addSpend(spendRequest, id)
        console.log(resultBenefit)
        return resultBenefit
    } catch (error) {
        console.log(error);
        throw error
    }};


const budgetService = {addUnitBudgetServ, getBenifitsServ, AddBenifitsServ}

export default budgetService