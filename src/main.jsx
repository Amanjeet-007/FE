import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from "react-router-dom";
import { store } from './redux/store.js';
import { Provider } from 'react-redux';
import { App } from './App.jsx';
import { registerSW } from 'virtual:pwa-register';
// import ScrollToTop from './components/common/Scroll.jsx';
import { ThemeProvider } from "./components/ThemeContext.jsx";


registerSW();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={App} />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
)
