import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './scss/main.scss';
import HomePage from './pages/HomePage';
import reportWebVitals from './reportWebVitals';
import ProjectsPage from './pages/ProjectsPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />}></Route>
          <Route path="projects" element={<ProjectsPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
