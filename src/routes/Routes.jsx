import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const OneLetter = lazy(() => import('../containers/OneLetter'));
const AllLetter = lazy(() => import('../containers/AllLetter'));


const RoutesPages = () => {
  return (
    <Suspense fallback={<h1> Loadign...</h1>}>
      <Routes>
          <Route exact path="/" element={<OneLetter />}  />
          <Route path="/all" element={<AllLetter />} />
      </Routes>
    </Suspense>
  );
}

export default RoutesPages;
