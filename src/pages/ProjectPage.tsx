import React, { useRef } from "react";
import { Box, Button } from "@mui/material";
import { minHeightWithoutToolBar } from "../styles/styleStrings";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import PageviewIcon from "@mui/icons-material/Pageview";
import GitHubIcon from "@mui/icons-material/GitHub";

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
            marginBottom: "3rem",
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
            alignContent: "center",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },

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
              marginBottom: "1rem",
            }}
          >
            <Box
              component="img"
              src={`/assets/portfolio/${"hvpWeb"}.png`}
              sx={{ height: "100%", width: "100%" }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "row", sm: "column" },
              justifyContent: "center",
              alignContent: "center",
              gap: "6rem",
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

        <Box
          sx={{
            display: "flex",
            margin: 0,
            padding: { xs: "2rem 2rem", sm: "0", md: "2rem 2rem" },
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: "2rem", md: "2rem" },
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                height: "15rem",
                width: { xs: "15rem", sm: "12rem", md: "15rem" },
                overflow: "hidden",
                borderRadius: "50%",
                marginBottom: "1rem",
              }}
            >
              <Box
                component="img"
                src={"assets/me.png"}
                sx={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box component="a" href="./assets/files/JGG_CV.pdf" download>
                <Button variant="contained">Download my CV</Button>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box>
              <Typography sx={{ fontSize: "1.25rem", mb: "1rem" }}>
                <Typography sx={{ fontSize: "inherit" }} component="span">
                  {" "}
                </Typography>

                <Typography
                  component={"span"}
                  sx={{
                    color: "primary.main",
                    fontSize: "inherit",
                    fontWeight: "bold",
                  }}
                >
                  React
                </Typography>
                <Typography sx={{ fontSize: "inherit" }} component="span">
                  {" "}
                </Typography>

                {/* <Typography component={"span"} sx={{ color: "primary.main", fontSize: "1.25rem", fontWeight: "bold" }}>
                React
              </Typography>
              , pero también he utilizado tecnologías de Backend y de desarrollo de software en Java. */}
              </Typography>
              <Typography sx={{ fontSize: "1.25rem", mb: "1rem" }}></Typography>
              <Typography
                sx={{ fontSize: "1.25rem", mb: "1rem" }}
              ></Typography>{" "}
            </Box>

            <Typography component={"h3"} variant={"h5"} sx={{ mb: "1rem" }}>
              Languages
            </Typography>
            <Box
              sx={{
                display: "grid",
                mb: "1rem",
                gridTemplateColumns: {
                  xs: "repeat(2, 1fr)",
                  sm: "repeat(1, 1fr)",
                },
              }}
            ></Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
