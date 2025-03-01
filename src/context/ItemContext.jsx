import {useState, createContext} from 'react';

export const ItemContext = createContext(null);

export default function ItemProvider({children}) {
  const [items, setItems] = useState([]);

  const addItem = item => setItems([...items, item]);

  const removeItem = index =>
    setItems([...items.slice(0, index), ...items.slice(index + 1)]);

  const getTotal = () => items.reduce((prev, curr) => prev + curr.precio, 0);

  const getTotalByUser = userIndex =>
    items
      .filter(item => item.personas.includes(userIndex))
      .reduce((prev, curr) => prev + curr.precio / curr.personas.length, 0);

  return (
    <ItemContext.Provider
      value={{items, setItems, addItem, removeItem, getTotal, getTotalByUser}}>
      {children}
    </ItemContext.Provider>
  );
}
