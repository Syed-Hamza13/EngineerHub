import Profile from "../../models/Profile.js";
import Project from "../../models/Project.js";

export const getContext = async (userId, projectId) => {
  const user = await Profile.findById(userId);
  const project = await Project.findById(projectId);

  return {
    user: {
      name: user.name,
      skills: user.skills,
      interests: user.interests
    },
    project: {
      title: project.title,
      domain: project.domain,
      members: project.members
    }
  };
};