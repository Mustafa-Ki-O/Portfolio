// src/index.js
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import  './i18n.js'
import { MantineProvider } from '@mantine/core';
import { theme } from './theme.js';

createRoot(document.getElementById('root')).render(
  <MantineProvider 
    theme={{
      colors: theme.colors,
      fontSizes: theme.fontSizes
    }} 
    withGlobalStyles 
    withNormalizeCSS
  >
    <App />
  </MantineProvider>,
);