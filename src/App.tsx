import React from 'react';
import { ThemeProvider, createMuiTheme, } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import Routes from "./Components/Routes";


const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          WebkitFontSmoothing: "auto",
          fontFamily: "Inter",
        },
      },
    },
  },
  palette: {
    primary: {
      light: "#fafafa",
      main: "#2eb3ff",
      dark: "#A0A0A0",
    },
    secondary: {
      main: "#131313",
    }
  }
})

const App: React.FC<{}> = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Routes />
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;

