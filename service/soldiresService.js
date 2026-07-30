import dalBenifits from "../dal/soldiersDal.js"


async function addBenefitServ(benefitRequest, id) {
    console.log("entered || serv addBenefitServ ,basic")
    try {
        const result = await dalBenifits.addBenefit(benefitRequest, id)
        return result
    } catch (error) {
        console.log(error);
        throw error
}};

const servSoldiers = {addBenefitServ}

export default servSoldiers








