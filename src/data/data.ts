import PageviewIcon from "@mui/icons-material/Pageview";
import {
  ISkills,
  IProjectData,
  ISkillsKey,
  ISkill,
} from "../interfaces/interfaces";
import * as React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// TODO: move somewhere else
export const getSkillById = (id: string) => {
  return skills.find((element) => element.id === id)?.id;
};

export const skills2: Record<ISkillsKey, ISkill> = {
  react: { id: "react", label: "React", showMain: true },
  html: { id: "html", label: "HTML", showMain: true },
  css: { id: "css", label: "CSS", showMain: true },
  javaScript: { id: "javaScript", label: "JavaScript", showMain: true },
  redux: { id: "redux", label: "Redux", showMain: true },
  materialui: { id: "materialui", label: "MUI", showMain: true },
  typeScript: { id: "typeScript", label: "TypeScript", showMain: true },
  nodeJs: { id: "nodejs", label: "Node.js", showMain: true },
  express: { id: "express", label: "Express", showMain: true },
  mongoDB: { id: "mongoDB", label: "MongoDB", showMain: true },
  mysql: { id: "mysql", label: "MySql", showMain: true },
  git: { id: "git", label: "Git", showMain: true },
  bootstrap: { id: "bootstrap", label: "Bootstrap", showMain: true },
  sass: { id: "sass", label: "Sass", showMain: true },
  java: { id: "java", label: "Java", showMain: true },
  hibernate: { id: "hibernate", label: "Hibernate", showMain: true },
  cypress: { id: "cypress", label: "Cypress", showMain: true },
  angular: { id: "angular", label: "Angular", showMain: true },
  googleCloud: { id: "googleCloud", label: "Google Cloud", showMain: false },
  javaFx: { id: "javaFx", label: "Java Fx", showMain: false },
};

// export const buttons = {
//     website:
// }

export const projectData: IProjectData[] = [
  {
    id: "hvpWeb",
    title: "HVP Web Project",
    technologies: [
      skills2.react,
      skills2.html,
      skills2.sass,
      skills2.bootstrap,
      skills2.javaScript,
    ],
    buttons: [
      {
        type: "website",
        url: "https://www.hospitalveterinariopeninsular.com/",
        component: PageviewIcon,
      },
      {
        type: "github",
        url: "https://github.com/JavierGarciaGomez/hvp2021frontend",
        component: GitHubIcon,
      },
    ],
  },
  {
    id: "hvpDashboard",
    title: "HVP Dashboard and Pedigree",
    technologies: [
      skills2.react,
      skills2.redux,
      skills2.materialui,
      skills2.nodeJs,
      skills2.express,
      skills2.mongoDB,
    ],
    buttons: [
      {
        type: "github",
        url: "https://github.com/JavierGarciaGomez/hvp2021frontend",
        component: GitHubIcon,
      },
      {
        type: "youtube",
        url: "https://www.youtube.com/watch?v=lP0gQJTrSuI&feature=youtu.be",
        component: YouTubeIcon,
      },
    ],
  },
  {
    id: "hvpDesktopApp",
    title: "HVP Management System",
    technologies: [
      skills2.java,
      skills2.hibernate,
      skills2.mysql,
      skills2.googleCloud,
      skills2.javaFx,
    ],
    buttons: [
      {
        type: "github",
        url: "https://github.com/JavierGarciaGomez/hvp2021frontend",
        component: GitHubIcon,
      },
      {
        type: "youtube",
        url: "https://www.youtube.com/watch?v=lP0gQJTrSuI&feature=youtu.be",
        component: YouTubeIcon,
      },
    ],
  },
];

// todo: replace this with below
export const skills = [
  { id: "react", label: "React" },
  { id: "html", label: "HTML" },
  { id: "css", label: "CSS" },
  { id: "javaScript", label: "JavaScript" },
  { id: "redux", label: "Redux" },
  { id: "materialui", label: "MUI" },
  { id: "typeScript", label: "TypeScript" },
  { id: "nodejs", label: "Node.js" },
  { id: "express", label: "Express" },
  { id: "mongoDB", label: "MongoDB" },
  { id: "mysql", label: "MySql" },
  { id: "git", label: "Git" },
  { id: "bootstrap", label: "Bootstrap" },
  { id: "sass", label: "Sass" },
  { id: "java", label: "Java" },
  { id: "hibernate", label: "Hibernate" },
  { id: "cypress", label: "Cypress" },
  { id: "angular", label: "Angular" },
];
