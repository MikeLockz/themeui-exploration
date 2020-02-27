/** @jsx jsx */
import { jsx, Box, Button, ThemeProvider } from "theme-ui";

// These are the defaultProps that are used for Codefi
// Button.defaultProps = {
//   position: 'relative',

//   mainColor: 'primary',
//   contrastColor: 'white',

//   height: 'auto',
//   px: 6,
//   py: 3,
//   border: 'none',
//   borderRadius: '4px',

//   lineHeight: '24px',
//   fontWeight: '600',
// }

const theme = {
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#1A5AFE",
    black: "#000",
    white: "#fff",
    blacks: [
      "rgba(0,0,0,.0125)",
      "rgba(0,0,0,.025)",
      "rgba(0,0,0,.05)",
      "rgba(0,0,0,.1)",
      "rgba(0,0,0,.2)",
      "rgba(0,0,0,.3)",
      "rgba(0,0,0,.4)",
      "rgba(0,0,0,.5)",
      "rgba(0,0,0,.6)",
      "rgba(0,0,0,.7)",
      "rgba(0,0,0,.8)",
      "rgba(0,0,0,.9)"
    ],
    whites: [
      "rgba(255,255,255,.0125)",
      "rgba(255,255,255,.025)",
      "rgba(255,255,255,.05)",
      "rgba(255,255,255,.1)",
      "rgba(255,255,255,.2)",
      "rgba(255,255,255,.3)",
      "rgba(255,255,255,.4)",
      "rgba(255,255,255,.5)",
      "rgba(255,255,255,.6)",
      "rgba(255,255,255,.7)",
      "rgba(255,255,255,.8)",
      "rgba(255,255,255,.9)"
    ]
  },
  space: [0, 4, 8, 12, 16, 20, 24, 32, 40],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fontWeights: {
    body: 400,
    heading: 500
  },
  lineHeights: {
    body: 1.5,
    heading: 1
  },
  fonts: {
    // serif: 'athelas, georgia, times, serif',
    sansSerif: '"Inter", "Helvetica", Arial, sans-serif',
    mono: 'Monaco, Consolas, "Lucida Console", monospace'
  },
  buttons: {
    primary: {
      position: "relative",
      bg: "primary",
      color: "white",

      height: "auto",
      px: 6,
      py: 3,
      border: "none",
      borderRadius: "4px",

      lineHeight: "24px",
      fontWeight: "bold",

      "&:hover": {
        bg: "text"
      }
    }
  }
};

function App() {
  return (
    <ThemeProvider theme={theme} className={"app"}>
      <Box p={8} sx={{ mb: 4 }} width="400px">
        <Button>I am a styled from the theme!</Button>
      </Box>
    </ThemeProvider>
  );
}

export default App;
