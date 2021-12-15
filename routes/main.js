const MOne = require('../models/mockdataone');
const MTwo = require('../models/mockdatatwo');

const router = require('express').Router();

router.get('/save', async (req, res) => {
    try {

        // const sessionToken = await req.cookies.token;
        // const data = await MockDataOne.find().populate({path:'email',select:['team_name']})
        const data = await MTwo.find()
        
        // const dataone = await MOne.aggregate([{
        //     "$lookup":{
        //         "from":"mtwo",
        //         "localField": "email",
        //         "foreignField": "email",
        //         "as": "Common"
        //     },
        //     //  $unwind: "Common"
        // }])
        let arr=[];
        // console.log(data[0].team_name)
        let i=0
        while(i<10001) {
            try{
                
            arr.push(data[i].team_name)
            //console.log(arr)
            
            const datatwo = await MOne.findOne({email: data[i].email})
                datatwo.team_name=data[i].team_name
                //console.log(datatwo.team_name)
                await datatwo.save()
                i++
            }catch(err) { break }
        }
        //console.log(arr)
        // res.send(data)
        res.send(arr)
        // dataone.forEach(obj=> {
        //     console.log("hi")
        //     console.log(obj)
        // })
        // const datatwo = await MockDataTwo.find()
        // res.send([dataone[0],datatwo[0]])
        //console.log(data)  
        // res.send(data)  
        
        // const books = await Book.aggregate([
        //     {
        //         $match: {
        //             have_read: false,
        //             user_id: String(user._id),
        //         }
        //     }
        // ]);
            // res.render('dashboard', { title: "My Library", username: user.username, avatar: user.avatar, books, self: true });

    } catch (err) {
        res.status(500).json(err);
    }

});
router.get('/', async (req, res) => {
    try {

        const data = await MOne.find()
        res.json(data)

    }catch(err) {
        console.log(err)
    }

});


module.exports = router;