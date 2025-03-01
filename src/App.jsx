import {useState, useEffect} from 'react';

import HomePage from './pages/Home';
import Splashscreen from './components/Splashscreen';
import UserProvider from './context/UserContext';
import ItemProvider from './context/ItemContext';

function App() {
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    setTimeout(() => setCargando(false), '2000');
  }, []);

  if (cargando) {
    return <Splashscreen />;
  }

  return (
    <UserProvider>
      <ItemProvider>
        <HomePage />
      </ItemProvider>
    </UserProvider>
  );
}

export default App;
