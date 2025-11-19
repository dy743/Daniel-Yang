// Using mock data instead of GraphCMS
import {
  mockSkills,
  mockProjects,
  mockSkillDetails,
  mockProjectDetails,
} from "./mockData";

//Get all skill basic info
export async function getAllSkills() {
  // Return mock data
  return mockSkills.map(({ title, slug }) => ({ title, slug }));
}

export async function getAllProjects() {
  // Return mock data
  return mockProjects.map(({ slug, title, shortDescription, skills }) => ({
    slug,
    title,
    shortDescription,
    skills,
  }));
}

//Get a specific subset/ordered list of skills
export async function getSkillList(slug) {
  // Return mock data - for now, return all skills
  return mockSkills.map(({ slug, title }) => ({ slug, title }));
}

export async function getSkill(slug) {
  // Return mock data
  const skill = mockSkills.find((s) => s.slug === slug);
  if (skill) {
    return { title: skill.title, slug: skill.slug };
  }
  return null;
}

export async function getSkillDetails(slug) {
  // Return mock data
  return mockSkillDetails[slug] || null;
}

export async function getProjectList(slug) {
  // If slug is "all", return all projects directly
  if (slug === "all") {
    return await getAllProjects();
  }

  // For other slugs, return empty array (or implement specific project lists if needed)
  return [];
}

export async function getProjectDetails(slug) {
  // Return mock data
  return mockProjectDetails[slug] || null;
}
