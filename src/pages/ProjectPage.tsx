import React, { useRef } from "react";
import { Box, Button } from "@mui/material";
import { minHeightWithoutToolBar } from "../styles/styleStrings";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import PageviewIcon from "@mui/icons-material/Pageview";
import GitHubIcon from "@mui/icons-material/GitHub";
import { SkillIcon } from "../components/skillIcon/SkillIcon";
import { useTranslation } from "react-i18next";
import { projectData } from "../data/data";
import { useParams } from "react-router-dom";

export const ProjectPage = () => {
  const { projectId } = useParams();

  // TODO get this

  const project = projectData.find((element) => element.id === projectId);

  const { t } = useTranslation();
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
            {project?.title}
          </Typography>
        </Box>
        {/* img and buttons */}
        <Box
          sx={{
            display: "flex",
            gap: "6rem",
            justifyContent: "center",
            alignItems: { xs: "center", sm: "stretch" },
            flexDirection: { xs: "column", sm: "row" },
            marginBottom: "5rem",
          }}
        >
          {/* LEFT: IMG */}
          <Box
            boxShadow={20}
            sx={{
              //   maxHeight: "30vh",

              width: { xs: "30rem", sm: "50rem" },
              height: { xs: "30rem", sm: "50rem" },
              //   width: { xs: "15rem", sm: "12rem", md: "15rem" },
              overflow: "hidden",
              borderRadius: "2%",
            }}
          >
            <Box
              component="img"
              src={`/assets/portfolio/${project?.id}.png`}
              sx={{ height: "100%", width: "100%" }}
            />
          </Box>

          {/* RIGHT */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignContent: "center",
              alignItems: "space-between",
              gap: "3rem",
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
                {project?.technologies.map((element) => (
                  <SkillIcon key={element.id} skill={element}></SkillIcon>
                ))}
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
                {project?.buttons.map((element) => (
                  <Box component={"a"} href={element.url}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth={true}
                      startIcon={<element.component />}
                    >
                      {element.type}
                    </Button>
                  </Box>
                ))}
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
          <Typography>{t(`projects.${project?.id}.desc`)}</Typography>
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
