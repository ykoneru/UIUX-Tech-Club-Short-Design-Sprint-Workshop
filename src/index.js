import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => (
  <div style={{ fontFamily: 'system-ui, sans-serif', textAlign: 'center', marginTop: '20vh' }}>
    <h1>Hello World</h1>
  </div>
);

// ensure there's a #root element (works if public/index.html has it; otherwise create one)
const rootElement =
  document.getElementById('root') ||
  (() => {
    const el = document.createElement('div');
    el.id = 'root';
    document.body.appendChild(el);
    return el;
  })();

createRoot(rootElement).render(<App />);