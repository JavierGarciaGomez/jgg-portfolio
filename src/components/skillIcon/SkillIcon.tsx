import React from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

type Props = {
  skill: { id: string; label: string };
};

export const SkillIcon = ({ skill }: Props) => {
  const { id, label } = skill;
  return (
    <Box
      boxShadow={10}
      borderRadius={50}
      sx={{
        backgroundColor: "primary.light",
        width: "6rem",
        height: "6rem",
        padding: "1rem",
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
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "66%",
        }}
      >
        <Box
          component="img"
          src={`/assets/skills/${id}.png`}
          sx={{ width: "100%" }}
        />
      </Box>
    </Box>
  );
};
