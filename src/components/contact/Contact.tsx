import React, { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { heightWithoutToolBar } from "../../styles/styleStrings";
import { useTranslation } from "react-i18next";
import { Skill } from "../skill/Skill";
import { ContactForm } from "./ContactForm";

export const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  const { t } = useTranslation();
  return (
    <Box
      className="contact"
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
      <Container sx={{ padding: "5rem 0" }}>
        <Box sx={{ display: "flex", justifyContent: "center", mb: "3rem" }}>
          <Typography variant="h2" component="h2" color={"white"}>
            {t("contact.heading")}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{ maxWidth: { xs: "80%", md: "60%" }, backgroundColor: "secondary.main", padding: "3rem" }}
            borderRadius={2}
            boxShadow={10}
          >
            <ContactForm />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
