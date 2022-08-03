import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { heightWithoutToolBar } from "../../styles/styleStrings";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();
  const languages = [
    { id: "es", level: "native" },
    { id: "en", level: "B2" },
    { id: "it", level: "B2" },
    { id: "fr", level: "B1" },
  ];
  return (
    <Box
      className="about"
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
        filter: "brightness(100%)",
      }}
    >
      <Container>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h2" component="h2">
            {t("about.heading")}
          </Typography>
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
                  {t("about.1.1")}
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
                  {t("about.1.2")}
                </Typography>

                {/* <Typography component={"span"} sx={{ color: "primary.main", fontSize: "1.25rem", fontWeight: "bold" }}>
                React
              </Typography>
              , pero también he utilizado tecnologías de Backend y de desarrollo de software en Java. */}
              </Typography>
              <Typography sx={{ fontSize: "1.25rem", mb: "1rem" }}>
                {t("about.2")}
              </Typography>
              <Typography sx={{ fontSize: "1.25rem", mb: "1rem" }}>
                {t("about.3")}
              </Typography>{" "}
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
            >
              {languages.map((lang) => (
                <Box
                  key={lang.id}
                  sx={{ display: "flex", gap: "2rem", mb: "1rem" }}
                >
                  <Box
                    component="img"
                    src={`./assets/flags/${lang.id}.png`}
                    sx={{ height: "2rem", width: "3rem" }}
                  ></Box>
                  <Typography>{t(`about.languages.${lang.id}`)}</Typography>
                  <Typography>{t(`about.languages.${lang.level}`)}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
