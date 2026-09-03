import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter, Navigate, Route, Routes,
} from 'react-router-dom';
import './static/css/main.scss';

const { PUBLIC_URL } = process.env;

const Index = lazy(() => import('./pages/Index'));
const Research = lazy(() => import('./pages/Research'));
const Teaching = lazy(() => import('./pages/Teaching'));
const Credentials = lazy(() => import('./pages/Credentials'));
const FunFacts = lazy(() => import('./pages/FunFacts'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/research" element={<Research />} />
        <Route path="/teaching" element={<Teaching />} />
        <Route path="/credentials" element={<Credentials />} />
        <Route path="/fun-facts" element={<FunFacts />} />
        <Route path="/projects" element={<Navigate replace to="/research" />} />
        <Route path="/resume" element={<Navigate replace to="/credentials" />} />
        <Route path="/about" element={<Navigate replace to="/fun-facts" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
