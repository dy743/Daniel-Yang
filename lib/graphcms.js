import { GraphQLClient } from "graphql-request";

const graphcmsEndpoint = process.env.GRAPHCMS_PROJECT_API;
const graphcmsToken = process.env.GRAPHCMS_PROD_AUTH_TOKEN;

if (!graphcmsEndpoint || graphcmsEndpoint.trim() === "") {
  throw new Error(
    "GRAPHCMS_PROJECT_API environment variable is not set or is empty. Please configure it in your Vercel environment variables."
  );
}

const graphcms = new GraphQLClient(graphcmsEndpoint, {
  headers: {
    authorization: `Bearer ${graphcmsToken || ""}`,
  },
});

//Get all skill basic info
export async function getAllSkills() {
  const data = await graphcms.request(
    `
    query getSkillsBasics() {
      skills {
        title
        slug
      }
      projects {
        slug
        title
        skills {
          slug
          title
        }
      }
    }`,
    {
      preview: false,
      stage: "PUBLISHED",
    }
  );
  return data.skills;
}

export async function getAllProjects() {
  const data = await graphcms.request(
    `
    query getAllProjects() {
      projects {
        slug
        title
        shortDescription
        skills {
          slug
          title
        }
      }
    }`,
    {
      preview: false,
      stage: "PUBLISHED",
    }
  );
  return data.projects;
}

//Get a specific subset/ordered list of skills
export async function getSkillList(slug) {
  const data = await graphcms.request(
    `
  query getSkillList($slug: String!) {
    skillList(where: {slug: $slug}) {
      skills {
        slug
        title
      }
    }
  }`,
    {
      preview: false,
      stage: "PUBLISHED",
      slug: slug,
    }
  );
  return data.skillList.skills;
}

export async function getSkill(slug) {
  const data = await graphcms.request(
    `
  query getSkill($slug: String!) {
    skill(where: {slug: $slug}) {
      title
      slug
    }
  }`,
    {
      preview: false,
      stage: "PUBLISHED",
      slug: slug,
    }
  );
  return data.skill;
}

export async function getSkillDetails(slug) {
  const data = await graphcms.request(
    `
  query getSkillDetails($slug: String!) {
    skill(where: {slug: $slug}) {
      title
      slug
      description
      primaryColor {
        rgba {
          r
          g
          b
          a
        }
      }
      secondaryColor {
        rgba {
          r
          g
          b
          a
        }
      }
      image {
        url
      }
      projects {
        slug
        title
        shortDescription
        skills {
          slug
          title
        }
      }
    }
  }`,
    {
      preview: false,
      stage: "PUBLISHED",
      slug: slug,
    }
  );
  return data.skill;
}

export async function getProjectList(slug) {
  const data = await graphcms.request(
    `
  query getProjectList($slug: String!) {
    projectList(where: {slug: $slug}) {
      projects {
        slug
        title
        shortDescription
        skills {
          slug
          title
        }
      }
    }
  }`,
    {
      preview: false,
      stage: "PUBLISHED",
      slug: slug,
    }
  );
  return data.projectList.projects;
}

export async function getProjectDetails(slug) {
  const data = await graphcms.request(
    `
  query getProjectDetails($slug: String!) {
    project(where: {slug: $slug}) {
      title
      slug
      description
      skills {
        title
        description
        slug
      }
      images {
        url
      }
      codeLink
      demoLink
      content
      primaryColor {
        rgba {
          r
          g
          b
          a
        }
      }
      secondaryColor {
        rgba {
          r
          g
          b
          a
        }
      }
    }
  }`,
    {
      preview: false,
      stage: "PUBLISHED",
      slug: slug,
    }
  );
  return data.project;
}
