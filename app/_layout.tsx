import { DarkTheme, Theme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import "../global.css";

const theme: Theme = {
  ...DarkTheme,
  colors: {
    primary: "rgb(29, 185, 84)",
    background: "rgb(19, 14, 14)",
    card: "rgb(18, 18, 18)",
    text: "rgb(229, 229, 231)",
    border: "rgb(39, 39, 41)",
    notification: "rgb(255, 69, 58)",
  },
};

export default function RootLayout() {
  return (
    <ThemeProvider value={theme}>
      <Stack />
    </ThemeProvider>
  );
}
