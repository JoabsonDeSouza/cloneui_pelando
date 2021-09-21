import React, { useContext } from 'react';
import { FlatList } from 'react-native';

import { Container, Text, ContainerItem } from './styles';
import MyContext from '../../context/MyContext';

const Tabs = () => {
  const { handleClick, currentList }: any = useContext(MyContext);

  return (
    <Container>
      <FlatList
        data={currentList}
        keyExtractor={item => String(item.id)}
        style={{ height: 40 }}
        renderItem={({ item, index }) => (
          <ContainerItem
            border={item.isActive}
            onPress={() => handleClick(item, index)}>
            <Text>{item.name}</Text>
          </ContainerItem>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
};

export default Tabs;
