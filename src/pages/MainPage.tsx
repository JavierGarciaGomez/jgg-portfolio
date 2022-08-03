import React from "react";
import { Box } from "@mui/material";
import { heightWithoutToolBar } from "../styles/styleStrings";
import { Hero } from "../components/hero/Hero";
import { About } from "../components/about/About";
import { Skills } from "../components/skills/Skills";
import { Contact } from "../components/contact/Contact";
import { Portfolio } from "../components/portfolio/Portfolio";

export const MainPage = () => {
  return (
    <Box
      className="main"
      component={"main"}
      sx={{
        width: "100%",
        scrollSnapType: "y mandatory",
        overflowY: "scroll",
        position: "relative",
        ...heightWithoutToolBar,
        scrollBehavior: "smooth",
      }}
    >
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </Box>
  );
};
