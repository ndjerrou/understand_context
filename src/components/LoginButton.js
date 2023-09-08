import CurrentUserContext from '../contexts/CurrentUserContext';
import Button from './Button';
import { useContext } from 'react';

const LoginButton = () => {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  return (
    <>
      <Button onClick={setCurrentUser}>Log me as Nissim</Button>
      {currentUser && <p>You are logged as {currentUser}</p>}
    </>
  );
};

export default LoginButton;
