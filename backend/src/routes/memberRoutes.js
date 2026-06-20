const express=require("express");

const router=express.Router();


const {

addMember,

getMembers,

removeMember,

updateRole


}=require("../controllers/memberController");



router.post(
"/projects/:projectId/members",
addMember
);



router.get(
"/projects/:projectId/members",
getMembers
);



router.delete(
"/projects/:projectId/members/:userId",
removeMember
);



router.patch(
"/projects/:projectId/members/:userId",
updateRole
);



module.exports=router;