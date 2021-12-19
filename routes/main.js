const MOne = require('../models/MockDataOne');
const MTwo = require('../models/MockDataTwo');

const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const data = await MOne.find().lean()
        if(!data[0].team_name == null){
            const data = await MTwo.find()

            // const dataone = await MOne.aggregate([{
            //     "$lookup":{
            //         "from":"MTwo",
            //         "localField": "email",
            //         "foreignField": "email",
            //         "as": "Common"
            //     },
            //     //  $unwind: "Common"
            // }])

            let arr=[];
            let i=0
            while(i<1001) {

                try{
                arr.push(data[i].team_name)
                const datatwo = await MOne.findOne({email: data[i].email})
                    datatwo.team_name=data[i].team_name
                    await datatwo.save()
                    i++
                }catch(err) { 
                    console.log(i)
                    break 
                }
            }

            res.redirect("dashboard")
            
        }else {
            res.render("index", { title: "Home Page"})
        }
    }catch(err) {
        console.log(err)
        res.render("index", { title: "Home Page"})
    }
    
})

router.get('/dashboard', async (req, res) => {
    try {

        const data = await MOne.find().lean()
        res.render("dashboard", { title: "Dashboard", users: data })

    }catch(err) {
        console.log(err)
    }

});


module.exports = router;