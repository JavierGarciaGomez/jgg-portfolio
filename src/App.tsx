import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { ResponsiveAppBar } from "./components/Appbar/Appbar";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";
import { AppRouter } from "./routes/AppRouter";
import { theme } from "./styles/theme";

i18n.use(initReactI18next).init({
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
    order: [
      "navigator",
      "localStorage",
      "htmlTag",
      "cookie",
      "sessionStorage",
      "path",
      "subdomain",
    ],
  },
  react: { useSuspense: false },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box className="app">
        <ResponsiveAppBar />

        <AppRouter />
      </Box>
    </ThemeProvider>
  );
}

export default App;
