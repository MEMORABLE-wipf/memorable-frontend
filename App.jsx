import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import CandidateDashboard from './components/CandidateDashboard';
import ManagerDashboard from './components/ManagerDashboard';
import AdminPanel from './components/AdminPanel';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={<CandidateDashboard />} />
      <Route path='/manager' element={<ManagerDashboard />} />
      <Route path='/admin' element={<AdminPanel />} />
    </Routes>
  );
}
