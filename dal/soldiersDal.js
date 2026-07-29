import db from "../DBconnection/mongoDB.js"

const soldierBenefits = db.collection("welfare record")

function addBenefit(benefitRequest, id) {
    const benefit = {
        soldierID = id,
        unit = benefitRequest.unit,
        currentBenefitType = benefitRequest
    }
}