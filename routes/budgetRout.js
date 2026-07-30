import express from "express"
import middleware from "../middleware.js"
import ctrlBudget from "../ctrl/ctrlBudget.js"


const route = express.Router()

route.post("/", middleware.validBudgetFunc, ctrlBudget.addUnitBudgetCtrl)

route.get("/", ctrlBudget.getBenifitsByParamCtrl)

route.get("/:id/transaction", ctrlBudget.getSpentByIdCtrl)

route.post("/:id/spend",middleware.validSpentRequestFunc, ctrlBudget.addSpentCtrl)


export default route