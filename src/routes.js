import React from 'react';

import { HashRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage'
import GitPage from './pages/GitPage'

export default function Router() {
  return (
    <HashRouter >
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/git-page/:login" element={<GitPage />} />
      </Routes>
    </HashRouter>
  )
}
