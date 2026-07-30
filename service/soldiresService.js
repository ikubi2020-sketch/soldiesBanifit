import dalBenifits from "../dal/soldiersDal.js"


async function addBenefitServ(benefitRequest, id) {
    console.log("entered || serv addBenefitServ ,basic")
    try {
        const result = await dalBenifits.addBenefit(benefitRequest)
        return result
    } catch (error) {
        console.log(error);
        throw error
}};

const servBenefits = {}









