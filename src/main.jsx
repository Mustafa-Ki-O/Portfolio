import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import './i18n.js';
import { MantineProvider } from '@mantine/core';
import { theme } from './theme.js';

function Main() {

  const initialColorScheme = () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('mantine-color-scheme') || 'light';
    }
    return 'light';
  };

  return (
    <MantineProvider
      theme={{
        ...theme,
        colorScheme: initialColorScheme(), // Apply initial mode
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <App />
    </MantineProvider>
  );
}

createRoot(document.getElementById('root')).render(<Main />);