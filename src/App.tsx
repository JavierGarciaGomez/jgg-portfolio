import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useState } from "react";
import { ResponsiveAppBar } from "./components/Appbar/Appbar";

import { Hero } from "./components/hero/Hero";
import { Intro } from "./components/intro/Intro";
import { Menu } from "./components/menu/Menu";

import { Testimonials } from "./components/testimonials/Testimonials";
import { Topbar } from "./components/topbar/Topbar";
import { Works } from "./components/works/Works";
import { heightWithoutToolBar } from "./styles/styleStrings";
import { About } from "./components/about/About";
import { I18nextProvider, initReactI18next, useTranslation } from "react-i18next";

import i18n from "i18next";

import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";
import { Skills } from "./components/skills/Skills";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Contact } from "./components/contact/Contact";

i18n
  .use(initReactI18next)

  .init({
    supportedLngs: ["en", "es"],
    resources: {
      en: global_en,
      es: global_es,
    },
    // lng: "es",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
    detection: {
      order: ["navigator", "localStorage", "htmlTag", "cookie", "sessionStorage", "path", "subdomain"],
    },
    react: { useSuspense: false },
  });

const theme = createTheme({
  palette: {
    primary: {
      main: "#A82441",
    },
    secondary: {
      main: "#F7C5CC",
    },
  },
  typography: {
    fontFamily: "Lato",
    h1: {
      fontSize: "2.9rem",
    },
  },
});

console.log({ ...i18n });

function App() {
  const { t, i18n } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <Box className="app">
        <ResponsiveAppBar />
        <Box
          className="main"
          component={"main"}
          sx={{
            width: "100%",
            scrollSnapType: "y mandatory",
            overflowY: "scroll",
            position: "relative",
            ...heightWithoutToolBar,
            scrollBehavior: "smooth",
          }}
        >
          <Hero />
          <About />
          <Skills />
          <Portfolio />
          <Contact />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
