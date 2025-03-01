import {useState, createContext} from 'react';
import {saveData} from '../utils/storage';

export const ItemContext = createContext(null);

export default function ItemProvider({children}) {
  const [items, setItems] = useState([]);

  const addItem = item => loadItems([...items, item]);

  const removeItem = index =>
    loadItems([...items.slice(0, index), ...items.slice(index + 1)]);

  const getTotal = () => items.reduce((prev, curr) => prev + curr.precio, 0);

  const getTotalByUser = userIndex =>
    items
      .filter(item => item.personas.includes(userIndex))
      .reduce((prev, curr) => prev + curr.precio / curr.personas.length, 0);

  const loadItems = u => {
    const data = u == undefined ? [] : u;
    setItems(data);
    saveData('items', data);
  };

  return (
    <ItemContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        getTotal,
        getTotalByUser,
        loadItems,
      }}>
      {children}
    </ItemContext.Provider>
  );
}
