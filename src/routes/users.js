const router=require('express').Router();
const {verifyPassword} = require('../helpers/hash');
const {hash}=require('../helpers/hash')
const User= require('../models/User');
router.get('/',async(req, res,)=>{
    const users= await User.findAll();
     res.send(users);
    }); 
router.post('/register',async (req, res)=>{
    const {firstName, lastName,email,password,phone,website} = req.body;
   
    const exist= await User.findOne({where:{email}});
   
    if(exist){
         res.status(409).send('User already exist');
         res.json({errror:"User already exist"});
   } 
    const user= await User.create({firstName:firstName,lastName:lastName,email:email,password:hash(password),phone:phone,website:website});
    res.json(user);
});

router.post("/login", async (req, res) => {
    const { email, password }=req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
     }
     let valid = verifyPassword(password, user.password);
    if (valid) {
     return  res.json({
         msg: "Welcome" + user.email,
         user,
     });
   };
    res.status(401).json({ error: "Invalid credentials" });
});
  


router.get('/:id',async (req, res)=>{
    const {id}=req.params;
    const user=await User.findByPk(id);
    if(!user){
        return res.status(404).send('User not found');
    }
    res.json({user});
});

router.put('/:id',async (req, res)=>{
    const {id}=req.params;
    const {firstName, lastName,email,website,phone}=req.body;
    const user=await User.findByPk(id);
    if(!user){
        return res.status(404).send('User not found');
    }
    const updatedUser=await user.update({firstName, lastName,email,website,phone});
    res.json(updatedUser);
});
router.delete('/:id',async(req, res)=>{
    const {id}=req.params;
    const user=await User.findByPk(id);
    if(!user){
        return res.status(404).send('User not found');
    }
    await user.destroy();
    res.json({msg:'User deleted'});
}
);

module.exports=router;
