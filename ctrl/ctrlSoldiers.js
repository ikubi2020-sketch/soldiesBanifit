import servSoldiers from "../service/soldiresService.js"


async function addBenefit(req, res) {
    console.log("enter AddBenifitsCtrl")
    try {
        const {id} = req.params
        // const Newid = Number(id)
        // console.log(Newid, id)
        // if(isNaN(Number(Newid))){res.status(400).json("id not a number")}
        const { benefit } = req.body
        const benefitResult = await servSoldiers.addBenefitServ(benefit ,id)
    } catch (error) {
        console.log(error)  
        res.status(400).json("something went wrong")}};

const ctrlSoldiers = { addBenefit }

export default  ctrlSoldiers