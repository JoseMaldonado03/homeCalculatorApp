import {useState, createContext} from 'react';

export const UserContext = createContext(null);

export default function UserProvider({children}) {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);

  const addUser = name => setUsers([...users, name]);

  const removeUser = index =>
    setUsers([...users.slice(0, index), ...users.slice(index + 1)]);

  return (
    <UserContext.Provider
      value={{users, showModal, setShowModal, addUser, removeUser}}>
      {children}
    </UserContext.Provider>
  );
}
