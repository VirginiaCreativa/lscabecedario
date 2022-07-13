import React from 'react';

import Layouts from './layouts/Layout';
import Mobile from './layouts/Mobile/Mobile';

const getWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

function App() {
  console.log(getWidth());
  return <section>{getWidth() <= 600 ? <Mobile /> : <Layouts />}</section>;
}

export default App;
