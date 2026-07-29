import express from "express"
import middleware from "../middleware.js"
import ctrlBudget from "../ctrl/ctrlBudget.js"


const route = express.Router()

route.post("/", middleware.validBudgetFunc, ctrlBudget.addUnitBudgetCtrl)

route.get("/select", ctrlBudget.getBenifitsByParamCtrl)

route.get("/:id/transaction", ()=>{})

route.post("/:id/spend", ()=>{})


export default route