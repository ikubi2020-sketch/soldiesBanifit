import client from "../DBconnection/supabaseDB.js"


function addUnitBudget(budgetRequest) {
    const unitBudget = {
        unit = budgetRequest.unit,
        benefit = budgetRequest.benefitType,
        month = budgetRequest.month,
        allocateAmount = budgetRequest.allocateAmount
    }
    const result = 
};