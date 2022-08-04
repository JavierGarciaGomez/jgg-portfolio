import React, { useRef } from "react";
import { Box, Button } from "@mui/material";
import { minHeightWithoutToolBar } from "../styles/styleStrings";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import PageviewIcon from "@mui/icons-material/Pageview";
import GitHubIcon from "@mui/icons-material/GitHub";
import { SkillIcon } from "../components/skillIcon/SkillIcon";

export const ProjectPage = () => {
  /* //TODO LIST:
        recibir el parámetro del proyecto
        crear la data
        crear las traducciones
        diseñar el componente

   */
  return (
    <Box
      component={"main"}
      sx={{
        width: "100%",
        ...minHeightWithoutToolBar,
        paddingTop: "6rem",
        backgroundColor: "secondary.main",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container>
        {/* Heading */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "5rem",
          }}
        >
          <Typography variant="h2" component="h2">
            HVP Web Project
          </Typography>
        </Box>
        {/* img and buttons */}
        <Box
          sx={{
            display: "flex",
            gap: "6rem",
            justifyContent: "center",
            // alignContent: "center",
            // alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
            marginBottom: "5rem",
            // maxHeight: "30vh",
          }}
        >
          {/* LEFT: IMG */}
          <Box
            boxShadow={20}
            sx={{
              //   maxHeight: "30vh",
              width: "50rem",
              maxHeight: "50rem",
              //   width: { xs: "15rem", sm: "12rem", md: "15rem" },
              overflow: "hidden",
              borderRadius: "2%",
            }}
          >
            <Box
              component="img"
              src={`/assets/portfolio/${"hvpWeb"}.png`}
              sx={{ height: "100%", width: "100%" }}
            />
          </Box>

          {/* RIGHT */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "row", sm: "column" },
              justifyContent: "space-evenly",
              alignContent: "center",
              alignItems: "space-between",
            }}
          >
            {/* Technologies */}
            <Box>
              <Typography variant="h5" component="h3" mb="1rem">
                Principales tecnologías
              </Typography>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "1rem",
                  justifyItems: "center",
                }}
              >
                <SkillIcon
                  skill={{
                    id: "react",
                    label: "React",
                  }}
                ></SkillIcon>
                <SkillIcon
                  skill={{
                    id: "angular",
                    label: "Angular",
                  }}
                ></SkillIcon>
              </Box>
            </Box>
            {/* Buttons */}
            <Box>
              <Typography variant="h5" component="h3" mb="1rem">
                Conozca más
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <Button variant="contained" startIcon={<PageviewIcon />}>
                  Website
                </Button>
                <Button variant="contained" startIcon={<GitHubIcon />}>
                  Github
                </Button>
                <Button variant="contained" startIcon={<YouTubeIcon />}>
                  Youtube
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Description */}
        <Box
          sx={{
            maxWidth: "80%",
            margin: "0 auto",
            marginBottom: "5rem",
          }}
        >
          <Typography variant="h3" component="h3" mb="2rem">
            Descripción
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            quo impedit perspiciatis maiores temporibus commodi tempore? Aperiam
            itaque alias laboriosam. Minus veritatis voluptates dignissimos eum
            repellendus numquam in, consequatur nesciunt?
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            marginRight: "10rem",
            marginBottom: "5rem",
          }}
        >
          <Button size="large" variant="outlined">
            BACK TO MAIN PAGE
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
