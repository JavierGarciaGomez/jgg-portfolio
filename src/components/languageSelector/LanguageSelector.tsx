import { Box, Button, styled, ToggleButton, ToggleButtonGroup } from "@mui/material";
import React, { MouseEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { lightBgColor } from "../../styles/styleStrings";

type langs = "en" | "es;";
export const LanguageSelector = () => {
  const { t, i18n } = useTranslation("global");
  const [language, setLanguage] = useState<langs>("en");
  const handleChange = (event: MouseEvent<HTMLElement>, newLanguage: langs) => {
    console.log(newLanguage);
    i18n.changeLanguage(newLanguage);
    console.log(i18n);
    setLanguage(newLanguage);
  };
  return (
    <Box sx={{ marginLeft: "2rem" }}>
      <ToggleButtonGroup
        value={language}
        exclusive
        onChange={handleChange}
        sx={{ backgroundColor: lightBgColor }}
        size="small"
        color="primary"
      >
        <ToggleButton value="en">EN</ToggleButton>
        <ToggleButton value="es">ES</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};
