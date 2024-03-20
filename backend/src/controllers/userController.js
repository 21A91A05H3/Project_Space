const UserData = require('../../models/course');

//Add user
const AddUserData = async(req,res,next)=>{
    const {name,email,password}=req.body;
    let existingUser;
    try{
        existingUser = await UserData.findOne({email});
    }catch(err){
        return console.log(err)
    }
    if(existingUser){
        return res.status(400).json({message:"User Already Exists! Login Instead"})
    }
    const user = new UserData({
        name,
        email,
        password
    })
    try{
        await user.save()
    }catch(err){
        return console.log(err) 
    }
}