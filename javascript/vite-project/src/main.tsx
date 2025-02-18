import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';

import Flow from './sandbox/Flow.tsx';
import App from './App2.tsx';
import Dnd from './sandbox/dnd/index.tsx';
import Edit from './sandbox/edit/index.tsx';
import EditTwo from './sandbox/edittwo.tsx';
import EditThree from './sandbox/editthree/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
