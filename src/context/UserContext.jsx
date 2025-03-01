import {useState, createContext} from 'react';
import {saveData} from '../utils/storage';

export const UserContext = createContext(null);

export default function UserProvider({children}) {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);

  const addUser = name => loadUsers([...users, name]);

  const removeUser = index =>
    loadUsers([...users.slice(0, index), ...users.slice(index + 1)]);

  const loadUsers = u => {
    const data = u == undefined ? [] : u;
    setUsers(data);
    saveData('users', data);
  };

  return (
    <UserContext.Provider
      value={{users, showModal, setShowModal, addUser, removeUser, loadUsers}}>
      {children}
    </UserContext.Provider>
  );
}
