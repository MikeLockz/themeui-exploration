/** @jsx jsx */
import { jsx, Box, Button, ThemeProvider } from "theme-ui";
import CodefiTheme from "./theme";

const customCodefiTheme = {
  ...CodefiTheme,
  buttons: {
    primary: {
      position: "relative",
      bg: "primary700",
      color: "white",

      height: "auto",
      px: 6,
      py: 3,
      border: "none",
      borderRadius: "4px",

      lineHeight: "24px",
      fontWeight: "bold",

      "&:hover": {
        bg: "primary800"
      },
      "&:active": {
        bg: "primary900"
      },
      "&:disabled": {
        bg: "primary400"
      }
    }
  }
};

function App() {
  console.log("Theme", CodefiTheme);
  return (
    <ThemeProvider theme={customCodefiTheme} className={"app"}>
      <Box p={8} sx={{ mb: 4 }} width="400px">
        <Button>I am a styled from the theme!</Button>
        <Button disabled>Disabled :-(</Button>
      </Box>
    </ThemeProvider>
  );
}

export default App;
