import { Box, Typography } from "@mui/material";
import { fontWeight } from "@mui/system";
import React, { useEffect, useRef } from "react";
import { heightWithoutToolBar, lightBgColor } from "../../styles/styleStrings";
import { motion } from "framer-motion";
import { init } from "ityped";
import { alpha } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

export const Hero = () => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (textRef.current !== null) {
      init(textRef.current, {
        showCursor: true,
        startDelay: 2000,
        loop: false,
        strings: ["Web Developer"],
      });
    }
  }, []);

  return (
    <Box
      className="hero"
      component={"section"}
      sx={{
        backgroundImage: "url(./assets/hero.avif)",
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
      <Box
        component={motion.div}
        boxShadow={20}
        initial={{ x: "-100vw", opacity: 0, scale: 1 }}
        animate={{ fontSize: 10, x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1.5, type: "spring", stiffness: 20 }}
        sx={{
          backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.7),
          padding: "1rem 2rem",
          borderRadius: "20px",
          flexGrow: 0,
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: "800", color: "white", textAlign: "center" }} component={motion.h2}>
          Javier García Gómez
        </Typography>
        <Typography
          variant="h2"
          sx={{ fontWeight: "800", color: "white", textAlign: "center" }}
          component={motion.h2}
        ></Typography>
      </Box>
      <Box
        component={motion.div}
        boxShadow={20}
        initial={{ opacity: 0, scale: 1 }}
        animate={{ fontSize: 10, opacity: 1 }}
        transition={{ delay: 1.5, duration: 1.5, type: "spring", stiffness: 10 }}
        sx={{
          backgroundColor: lightBgColor,
          padding: "0.5rem",
          borderRadius: "20px",
          mt: "3rem",
          display: "inline-block",
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "800", color: "primary.main", textAlign: "center" }}
          component={motion.h2}
        >
          Web Developer
        </Typography>
      </Box>
    </Box>
  );
};
