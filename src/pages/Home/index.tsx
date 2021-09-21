import React, { useContext, useEffect, useRef } from 'react';

import { FlatList } from 'react-native';
import Card from '../../components/Card';
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import MyContext from '../../context/MyContext';

import { Container, ContainerList } from './styles';

import mockList from '../../../mock';
import Swiper from 'react-native-swiper';
import listTabs from '../../../listTabs';

const Home = () => {
  const { currentTab, currentList, handleClick }: any = useContext(MyContext);
  const createRef = useRef<any>(null);

  useEffect(() => {
    createRef?.current?.scrollBy(currentTab);
  }, [currentTab]);

  return (
    <Container>
      <Header />
      <Tabs />
      <Swiper
        showsPagination={false}
        ref={createRef}
        onIndexChanged={() => handleClick(currentList[currentTab], currentTab)}>
        {listTabs.map(index => (
          <ContainerList key={String(index)}>
            <FlatList
              data={mockList}
              keyExtractor={item => String(item.id)}
              renderItem={({ item }) => <Card item={item} />}
              showsVerticalScrollIndicator={false}
            />
          </ContainerList>
        ))}
      </Swiper>
    </Container>
  );
};

export default Home;
