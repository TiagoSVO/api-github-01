import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage'
import GitPage from './pages/GitPage'

export default function Router() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/git-page/:login" element={<GitPage />} />
      </Routes>
    </BrowserRouter>
  )
}
