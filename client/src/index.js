import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './src/i18n';
import Home from './src/views/pages/Home/Home'

ReactDOM.render(
  <Suspense fallback={<span />}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </Suspense>,
  document.getElementById('root'),
);
