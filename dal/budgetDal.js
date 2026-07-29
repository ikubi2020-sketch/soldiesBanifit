import client from "../DBconnection/supabaseDB.js"

const budgetDb = client

async function addUnitBudget(budgetRequest) {
     console.log("enter dal")
    const unitBudget = {
        unit : budgetRequest.unit,
        benifits : budgetRequest.benefitType,
        month : budgetRequest.month,
        allocatedAmount : budgetRequest.allocateAmount
    }
    try {
        console.log(unitBudget)
        const result = await budgetDb.from("budget_alloction").insert(unitBudget).select()
        return result.data
    } catch (error) { 
        console.log(error) 
        throw error
    }};

async function getBenifitsByParam(myParams) {
    console.log("enter dal get");
    const {unit, month, benefit} = myParams
    try {
        console.log(unit, month, benefit)
        const allBenifits = await budgetDb.from("budget_alloction").select("*")
        console.log(allBenifits)
        let allBenifitsData = allBenifits.data
        console.log(allBenifitsData)
        if(unit) {let allBenifitsData = allBenifitsData.filter(oneBenefit, ()=>{return oneBenefit.unit === unit})}
        if(month) {let allBenifitsData = allBenifitsData.filter(oneBenefit, ()=>{return oneBenefit.month === month})}
        if(benefit) {let allBenifitsData = allBenifitsData.filter(oneBenefit, ()=>{return oneBenefit.benifits === benefit})}
        console.log(allBenifitsData)
        return allBenifitsData
    } catch (error) {
        console.log(error)  
        throw error
    }};

const budgetDal = {addUnitBudget, getBenifitsByParam}

export default budgetDal