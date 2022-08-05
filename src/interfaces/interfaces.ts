import { OverridableComponent } from "@mui/types";
import { SvgIconTypeMap } from "@mui/material";
export interface PortfolioItem {
  id: number;
  title: string;
  img: string;
}

export type ISkill = {
  id: string;
  label: string;
  showMain: boolean;
};

export type ISkills = { [key: string]: ISkill };

export type ISkillsKey =
  | "react"
  | "html"
  | "css"
  | "javaScript"
  | "redux"
  | "materialui"
  | "typeScript"
  | "nodeJs"
  | "express"
  | "mongoDB"
  | "mysql"
  | "git"
  | "bootstrap"
  | "sass"
  | "java"
  | "hibernate"
  | "cypress"
  | "angular"
  | "googleCloud"
  | "javaFx"
  | "angularMaterial";

export type IProjectButton = {
  type: "website" | "github" | "youtube";
  url: string;
  component: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
};
export type IProjectData = {
  id: string;
  title: string;
  technologies: ISkill[];
  buttons: IProjectButton[];
};
