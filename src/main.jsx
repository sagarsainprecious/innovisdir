import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";

import themes from './components/AdminPannel/themes';
import { LayoutProvider } from "./components/AdminPannel/context/LayoutContext.jsx";
import { UserProvider } from "./components/AdminPannel/context/UserContext.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <LayoutProvider>
        <UserProvider>
      <ThemeProvider theme={themes.default}>
        <CssBaseline />
          <App />
      </ThemeProvider>
        </UserProvider>
      </LayoutProvider>
  </React.StrictMode>,
)
