const express = require("express");

const router = express.Router();


const {

createProfile,

getProfile,

updateProfile,

deleteProfile,

addSkill,

removeSkill,

addTechnology,

removeTechnology,

addAlgorithm,

removeAlgorithm,

addInterest,

removeInterest

}
=
require("../controllers/profileController");


// Create Profile

router.post(
    "/",
    createProfile
);



// Get Profile

router.get(
    "/:userId",
    getProfile
);



// Update Profile

router.put(
    "/:userId",
    updateProfile
);



// Delete Profile

router.delete(
    "/:userId",
    deleteProfile
);

// Add Skill

router.patch(
"/:userId/skills/add",
addSkill
);



// Remove Skill

router.patch(
"/:userId/skills/remove",
removeSkill
);

// Add Technology

router.patch(
"/:userId/technologies/add",
addTechnology
);


// Remove Technology

router.patch(
"/:userId/technologies/remove",
removeTechnology
);

// Add Algorithm

router.patch(
"/:userId/algorithms/add",
addAlgorithm
);



// Remove Algorithm

router.patch(
"/:userId/algorithms/remove",
removeAlgorithm
);

// Add Interest

router.patch(
"/:userId/interests/add",
addInterest
);



// Remove Interest

router.patch(
"/:userId/interests/remove",
removeInterest
);


module.exports = router;