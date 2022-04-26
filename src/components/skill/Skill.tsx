import { Box, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { lightBgColor } from "../../styles/styleStrings";

type Props = {
  skill: { id: string; label: string };
};
export const Skill = ({ skill }: Props) => {
  const { id, label } = skill;
  const theme = useTheme();
  return (
    <Box
      boxShadow={20}
      borderRadius={4}
      sx={{
        width: { xs: "8.5rem", sm: "7.5rem" },
        backgroundColor: "primary.dark",
        padding: "1rem",
        boxShadow: "0 0 10px hsl(0deg 0% 100% / 50%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transition: "all 0.5s",
      }}
      component={motion.div}
      whileHover={{
        scale: 1.1,
        textShadow: "0px 0px 8px rgb(255,255,255)",
        boxShadow: "0px 0px 8px rgb(255,255,255)",
        // backgroundColor: theme.palette.primary.dark,
      }}
    >
      <Box sx={{ width: "80%", flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Box component="img" src={`./assets/skills/${id}.png`} sx={{ maxHeight: "8rem" }} />
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography fontSize={18} color="white" fontWeight={600} sx={{ textAlign: "center" }}>
          {label}
        </Typography>
      </Box>
    </Box>
  );
};
