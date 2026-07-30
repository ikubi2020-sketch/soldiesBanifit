import { date } from "zod"
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
    console.log("enter dal getBenifitsByParam");
    const {unit, month, benefit} = myParams
    try {
        const allBenifits = await budgetDb.from("budget_alloction").select("*")
        let allBenifitsData = allBenifits.data
        if(unit) {allBenifitsData = allBenifitsData.filter((oneBenefit)=>{return oneBenefit.unit === unit})}
        if(month) {allBenifitsData = allBenifitsData.filter((oneBenefit)=>{return oneBenefit.month === month})}
        if(benefit) {allBenifitsData = allBenifitsData.filter((oneBenefit)=>{return oneBenefit.benifits === benefit})}
        console.log(allBenifitsData)
        return allBenifitsData
    } catch (error) {
        console.log(error)  
        throw error
    }};



async function checkForBudgetId(searchId) {
     console.log("enter dal checkForBudgetId")
    try {
        const result = await budgetDb.from("budget_alloction").select().eq("id", searchId)
        console.log(result.data)
        return result.data
    } catch (error) { 
        console.log(error) 
        throw error
    }};
 

async function addSpend(spendRequest, id) {
    console.log("enter dal addSpend");
    try {
        const date = new Date
        console.log(spendRequest)
        const spendBuild = {
            budgetID : id,
            amount : spendRequest.amount,
            createdAT :  date,
            reseon : spendRequest.reason
        }
        spendRequest.createdAT =  date
        const result =  await budgetDb.from("spend_transaction").insert(spendBuild).select()
        return result.data
    } catch (error) {
        console.log(error)  
        throw error
    }};



async function geAllSpendsById(searchId) {
    console.log("enter dal geAllSpends");
    try {
        const result =  await budgetDb.from("spend_transaction").select().eq("budgetID", searchId)
        console.log(result.data)
        return result.data
    } catch (error) {
        console.log(error)  
        throw error
    }};

const budgetDal = {addUnitBudget, getBenifitsByParam, addSpend, checkForBudgetId, geAllSpendsById}

export default budgetDal