import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';

import Flow from './Flow.tsx';
import App from './App.tsx';
import Dnd from './dnd/index.tsx';
import Edit from './edit/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Flow" element={<Flow />} />
        <Route path="/Drag" element={<Dnd />} />
        <Route path="/Edit" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
