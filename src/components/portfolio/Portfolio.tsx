import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { heightWithoutToolBar } from "../../styles/styleStrings";
import { Portfolio2 } from "./Portfolio2";
import { projectData } from "../../data/data";
import { Link } from "react-router-dom";

// const projects = [
//   {
//     id: "hvpWeb",
//     link: "https://www.hospitalveterinariopeninsular.com/",
//     github: "https://github.com/JavierGarciaGomez/hvp2021frontend",
//     name: "Web Hospital Veterinario Peninsular",
//   },
//   {
//     id: "pedigreeApp",
//     link: "https://youtu.be/lP0gQJTrSuI/",
//     github: "https://github.com/JavierGarciaGomez/hvp2021frontend",
//     name: "Pedigree App",
//   },
//   {
//     id: "hvpDesktopApp",
//     link: "https://youtu.be/f1HXwn91GdM/",
//     github: "https://github.com/JavierGarciaGomez/HVPManagement",
//     name: "HVP Management System",
//   },
// ];
export const Portfolio = () => {
  const { t } = useTranslation();
  return (
    <Box
      className="portfolio"
      component={"section"}
      sx={{
        backgroundColor: "secondary.main",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",

        ...heightWithoutToolBar,
        scrollSnapAlign: "start",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "3rem",
          }}
        >
          <Typography variant="h2" component="h2">
            {t("portfolio.heading")}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(3, 1fr)" },
            justifyContent: "space-evenly",
            gap: "2rem",
          }}
        >
          {projectData.map((project) => (
            <Box
              key={project.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Link to={`/project/${project.id}`}>
                <Box
                  boxShadow={15}
                  borderRadius={2}
                  sx={{
                    marginBottom: "1rem",
                    maxWidth: { md: "80%" },
                    maxHeight: { xs: "20rem", sm: "100%" },
                    position: "relative",
                    transition: "all .5s ease",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    "&:hover": {
                      backgroundColor: "primary.light",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={`./assets/portfolio/${project.id}.png`}
                    sx={{
                      height: "100%",
                      zIndex: 1,
                      "&:hover": {
                        zIndex: 0,
                        opacity: "0.2",
                      },
                    }}
                  ></Box>
                  <Typography
                    component={"h3"}
                    sx={{
                      position: "absolute",
                      color: "white",
                      fontSize: "20px",
                      textAlign: "center",
                    }}
                  >
                    {project.title}
                  </Typography>
                </Box>
              </Link>
              {/* <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  gap: "1rem",
                }}
              >
                {project?.buttons.map((element) => (
                  <Box component={"a"} href={element.url} key={element.type}>
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
              </Box> */}
            </Box>
          ))}

          {/* <Portfolio2 /> */}
        </Box>
      </Container>
    </Box>
  );
};
