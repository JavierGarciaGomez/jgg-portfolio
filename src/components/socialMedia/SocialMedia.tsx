import React, { useState } from "react";
import { Email, GitHub, LinkedIn, Phone, YouTube } from "@mui/icons-material/";
import { motion } from "framer-motion";
import { OverridableComponent } from "@mui/types";
import { Box, SvgIconTypeMap, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { yellow } from "@mui/material/colors";
import { lightBgColor } from "../../styles/styleStrings";

const icons = [
  { id: "linkedin", icon: LinkedIn, link: "https://www.linkedin.com/in/javier-garcia-gomez/" },
  { id: "email", icon: Email, link: "mailto:javieron.garcia@gmail.com" },
  { id: "phone", icon: Phone, link: "tel:+34635026146" },
  { id: "github", icon: GitHub, link: "https://github.com/JavierGarciaGomez" },
  { id: "youtube", icon: YouTube, link: "https://www.youtube.com/channel/UCRhC_IQiiDC-llhVnXZiZeA" },
];

type lang = "es" | "en";

export const SocialMedia = () => {
  const [first, setfirst] = useState<lang>("es");
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        height: "100%",
        overflow: "visible",
      }}
    >
      {icons.map((icon) => {
        const { icon: Icon } = icon;
        return (
          <motion.a
            href={icon.link}
            key={icon.id}
            whileHover={{
              scale: 1.25,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
              color: lightBgColor,
            }}
            className="link"
          >
            <Icon sx={{ fontSize: "1.6rem" }} />
          </motion.a>
        );
      })}
    </Box>
  );
};
