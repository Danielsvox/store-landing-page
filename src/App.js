// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header/Header'; // Import Header component
import MainComponent from './MainComponent';
import { ThemeProvider } from '@mui/material/styles';
import theme from './config/theme'
import { Box } from '@mui/material';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  return (
    <div className="App">
      <Header />
      <ThemeProvider theme={theme}>
        <main>
          <MainComponent /> {/* This includes both CategorySelector and ContentDisplay */}

          <Box component="h2" sx={{ typography: 'h2' }}>
            Contáctanos
          </Box>
          <ContactForm></ContactForm>
        </main>
      </ThemeProvider>
    </div>
  );
}

export default App;
