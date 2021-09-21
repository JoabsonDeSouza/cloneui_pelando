import { useNavigation } from '@react-navigation/native';
import React from 'react';

import {
  Container,
  Text,
  ContainerIcons,
  ContainerText,
  MenuIcon,
  IconActions,
} from './styles';

const Header = () => {
  const navigation: any = useNavigation();

  return (
    <Container>
      <MenuIcon name="menu" size={25} onPress={() => navigation.openDrawer()} />

      <ContainerText>
        <Text>Todas promoções</Text>
        <IconActions name="ios-caret-down" size={15} />
      </ContainerText>
      <ContainerIcons>
        <IconActions name="notifications" size={25} />
        <IconActions name="search" size={25} />
        <IconActions name="ellipsis-vertical" size={25} />
      </ContainerIcons>
    </Container>
  );
};

export default Header;
