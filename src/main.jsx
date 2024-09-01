import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store.js';

// customs
import { createTheme, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
    palette: {
        first: {
            main: '#9E682A',
            contrastText: '#FFFFFF',
        },
        second: {
            main: '#EEE6DD',
        },
        third: {
            main: 'green',
            contrastText: '#ffffff',
        },
        fifth: {
            main: '#D8C5AB',
        },
        seventh: {
            main: '#4F3717',
        },
    },
    components: {
        MuiButton: {
            variants: {
                props: { size: 'small' },
                style: {
                    padding: '1px 1px',
                    fontSize: '12px',
                },
            },
        },
    },
});

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </Provider>
);
