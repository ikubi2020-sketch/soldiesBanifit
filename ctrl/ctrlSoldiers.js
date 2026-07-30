


async function addeBenifit(req, res) {
    console.log("enter getBenifitsByParamCtrl")
    try {
        const id = req.params
        if(NaN(id)){res.status(400).json("id not a number")}
    } catch (error) {
        console.log(error)  
        res.status(400).json("something went wrong")
    }
}