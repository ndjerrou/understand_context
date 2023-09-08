import { useState } from 'react';
import Form from './components/Form';
import CurrentUserContext from './contexts/CurrentUserContext';

function App() {
  const [currentUser, setCurrentUser] = useState('');
  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <Form />
    </CurrentUserContext.Provider>
  );
}

export default App;
