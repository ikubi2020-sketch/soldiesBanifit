import express from "express"
import middleware from "../middleware.js"
import ctrlSoldiers from "../ctrl/ctrlSoldiers.js"



const route = express.Router()


route.post("/:soldierID/benefits", middleware.validBenefitRequestFunc, ctrlSoldiers.addBenefit)

route.get("/:soldierID/benefits",  ()=>{})

route.patch("/:soldierID/benefits", ()=>{})

 
export default route