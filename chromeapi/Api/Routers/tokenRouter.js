const express=require("express");
const authController=require("../Controllers/authController");
const router=express.Router();

router.get("/alltoken",authController.allTokens);
router.post("/createtoken",authController.addToken);

module.exports=router;