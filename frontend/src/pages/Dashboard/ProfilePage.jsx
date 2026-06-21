import { useState, useEffect } from "react";
import {
  getProfile,
  updateProfile
}
from "../../services/profileApi";

import ProfileTab from "../../components/setting/ProfileTab";
import SkillsSection from "../../components/setting/SkillsSection";
import TechnicalAreaSection from "../../components/setting/TechnicalAreaSection";
import TechStackSection from "../../components/setting/TechStackSection";
import InterestSection from "../../components/setting/InterestSection";

function ProfilePage() {
  const [editMode, setEditMode] = useState(false);

  const [profile, setProfile] = useState({
    name: "Syed Hamza",
    email: "hamza@example.com",
    role: "Full Stack Developer",

    skills: ["AI/ML", "Backend", "Frontend"],

    technicalAreas: ["Machine Learning", "Deep Learning", "NLP"],

    techStack: ["React", "Node.js", "MongoDB", "Docker"],

    interests: ["AI", "Research Papers", "Open Source"],
  });

  useEffect(() => {

  const fetchProfile =
    async () => {

      try {

        const user =
        JSON.parse(
          localStorage.getItem(
            "user"
          )
        );

        const response =
        await getProfile(
          user._id
        );

        const profileData =
        response.data;

        setProfile({
          name:
          user.fullName,
          email:
          user.email,
          role:
          profileData.role,
          skills:
          profileData.skills,
          technicalAreas:
          profileData.algorithms,
          techStack:
          profileData.technologies,
          interests:
          profileData.interests,
        });

      } catch (error) {

        console.error(
          error
        );

      }

    };

  fetchProfile();

}, []);

  const handleSave =
  async () => {

    try {

      const user =
      JSON.parse(
        localStorage.getItem(
          "user"
        )
      );

      await updateProfile(
        user._id,
        {
          role:
          profile.role,
          skills:
          profile.skills,
          algorithms:
          profile.technicalAreas,
          technologies:
          profile.techStack,
          interests:
          profile.interests,
        }
      );

      setEditMode(false);

    } catch (error) {

      console.error(
        error
      );

    }

};

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Profile Settings</h1>

          <p className="text-slate-500 mt-1">
            Manage your profile and preferences
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => setEditMode(!editMode)}
            className="
              px-4
              py-2
              border
              rounded-xl
            "
          >
            {editMode ? "Cancel" : "Edit Profile"}
          </button>

          {editMode && (
            <button
              onClick={handleSave}
              className="
                px-4
                py-2
                bg-blue-600
                text-white
                rounded-xl
              "
            >
              Save Changes
            </button>
          )}
        </div>
      </div>

      <ProfileTab
        profile={profile}
        setProfile={setProfile}
        editMode={editMode}
      />

      <SkillsSection skills={profile.skills} />

      <TechnicalAreaSection areas={profile.technicalAreas} />

      <TechStackSection techStack={profile.techStack} />

      <InterestSection interests={profile.interests} />
    </div>
  );
}

export default ProfilePage;
