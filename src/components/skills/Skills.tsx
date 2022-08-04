import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { heightWithoutToolBar } from "../../styles/styleStrings";
import { useTranslation } from "react-i18next";
import { Skill } from "../skill/Skill";
import { skills } from "../../data/data";

export const Skills = () => {
  const { t } = useTranslation();
  return (
    <Box
      className="skills"
      component={"section"}
      sx={{
        backgroundColor: "primary.light",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        ...heightWithoutToolBar,
        scrollSnapAlign: "start",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        filter: "brightness(100%)",
      }}
    >
      <Container sx={{ padding: "8rem 0" }}>
        <Box sx={{ display: "flex", justifyContent: "center", mb: "3rem" }}>
          <Typography variant="h2" component="h2" color={"white"}>
            {t("skills.heading")}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "repeat(3, 1fr)", sm: "repeat(4, 1fr)" },
            gap: "2rem",
            justifyItems: "center",
          }}
        >
          {skills.map((skill) => (
            <Skill key={skill.id} skill={skill} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};
