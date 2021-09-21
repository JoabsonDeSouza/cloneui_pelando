import React, { useState } from 'react';
import Routes from './routes';
import 'react-native-gesture-handler';
import MyContext from './context/MyContext';
import listTabs from '../listTabs';

const App = () => {
  const [currentTab, setCurrentTab] = useState<number>(0);
  const [currentList, setCurrentList] = useState(listTabs);

  const updateCurrentTab = (tab: number) => {
    setCurrentTab(tab);
  };

  const handleClick = (item: { id: number }, position: number) => {
    const updatedList = listTabs.map(listItem => {
      if (listItem.id === item.id) {
        return { ...listItem, isActive: true };
      }
      return { ...listItem, isActive: false };
    });
    console.log('position', position);
    updateCurrentTab(position);
    setCurrentList(updatedList);
  };

  return (
    <MyContext.Provider
      value={{
        currentTab,
        updateCurrentTab,
        currentList,
        setCurrentList,
        handleClick,
      }}>
      <Routes />
    </MyContext.Provider>
  );
};

export default App;
