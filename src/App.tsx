import Main from '@components/Main';
import { PlanetProvider } from '@contexts/Planet';

const App = () => (
  <PlanetProvider>
    <Main />
  </PlanetProvider>
);

export default App;
