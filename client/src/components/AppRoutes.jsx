import React from 'react';
import { Routes, Route } from 'react-router-dom';

function AppRoutes() {
  return (
   <Routes>
       <Route path="/" element={Main}/>
   </Routes>
  );
}

export default AppRoutes;
