import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';

import Flow from './sandbox/Flow.tsx';
import App from './App.tsx';
import Dnd from './sandbox/dnd/index.tsx';
import Edit from './sandbox/edit/index.tsx';
import EditTwo from './sandbox/edittwo.tsx';
import EditThree from './sandbox/editthree/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Flow" element={<Flow />} />
        <Route path="/Drag" element={<Dnd />} />
        <Route path="/Edit" element={<Edit />} />
        <Route path="/EditTwo" element={<EditTwo />} />
        <Route path="/EditThree" element={<EditThree />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
