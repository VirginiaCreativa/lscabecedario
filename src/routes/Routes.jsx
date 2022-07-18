import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const OneLetter = lazy(() => import('../containers/OneLetter'));
const AllLetter = lazy(() => import('../containers/AllLetter'));
const Games = lazy(() => import('../containers/GameLetter'));
const Cursos = lazy(() => import('../containers/Cursos'));
const Home = lazy(() => import('../containers/Home'));

function RoutesPages() {
  return (
    <Suspense fallback={<h1> Loadign...</h1>}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/one" element={<OneLetter />} />
        <Route exact path="/all" element={<AllLetter />} />
        <Route exact path="/games" element={<Games />} />
        <Route exact path="/cursos" element={<Cursos />} />
      </Routes>
    </Suspense>
  );
}

export default RoutesPages;
