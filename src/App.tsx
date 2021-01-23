import { Suspense } from 'react';

import Loading from './components/Loading';
import Main from './components/Main';
import { PlanetProvider } from './contexts/Planet';

const Wrapper = () => (
  <div className="flex h-screen justify-center items-center">
    <Loading />
  </div>
);

const App = () => (
  <Suspense fallback={<Wrapper />}>
    <PlanetProvider>
      <Main />
    </PlanetProvider>
  </Suspense>
);

export default App;
