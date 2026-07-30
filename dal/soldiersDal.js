import db from "../DBconnection/mongoDB.js"

const soldierBenefits = db.collection("welfare record")

async function addBenefit(benefitRequest, id) {
    console.log("entered || dal addBenefit ,basic")
    try {
        const benefit = {
        soldierID = id,
        unit : benefitRequest.unit,
        currentBenefitType : benefitRequest.currentBenefitType,
        history: []
    }
    const result = await soldierBenefits.insertOne(benefit)
    console.log(result)
    return result
    } catch (error) {
        console.log(error)
        throw error
    }};

const dalBenifits = { addBenefit }

export default dalBenifits