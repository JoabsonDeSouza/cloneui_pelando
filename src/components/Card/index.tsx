/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  Container,
  ContainerOne,
  ContainerTwo,
  Image,
  ContainerImage,
  ContainerDescription,
  Temperature,
  ContainerHeader,
  ContainerTime,
  Text,
  ContainerUser,
  ContainerIcons,
  Avatar,
  ContainerRow,
} from './styles';
import { Promotion } from '../../types/Promotion';
import { useNavigation } from '@react-navigation/native';

interface CardProps {
  item: Promotion;
}

const Card = ({ item }: CardProps) => {
  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate('Details', { item });
  };

  return (
    <Container onPress={handleClick}>
      <ContainerOne>
        <ContainerImage>
          <Image
            source={{
              uri: item.image,
            }}
          />
        </ContainerImage>
        <ContainerDescription>
          <ContainerHeader>
            <Temperature>
              <Icon name="md-remove" size={20} color={colors.blue} />
              <Text color={colors.red}>{item.temperature}</Text>
              <Icon name="md-add" size={20} color={colors.red} />
            </Temperature>
            <ContainerTime>
              <Icon name="md-time-outline" color={colors.gray_text} />
              <Text color={colors.gray_text}>{item.time}</Text>
            </ContainerTime>
          </ContainerHeader>
          <Text>{item.description}</Text>
          <Text color={colors.gray_text}>Mobly</Text>
          <Text color={colors.orange} bold>
            {item.price}
          </Text>
        </ContainerDescription>
      </ContainerOne>
      <ContainerTwo>
        <ContainerUser>
          <Avatar
            source={{
              uri: item.avatar,
            }}
          />
          <Text bold>{item.name}</Text>
        </ContainerUser>
        <ContainerIcons>
          <Icon name="bookmark" color={colors.gray_icon} size={20} />
          <ContainerRow>
            <Icon
              name="chatbubble-sharp"
              color={colors.gray_icon}
              size={20}
              style={{ marginRight: 5 }}
            />
            <Text>{item.comments}</Text>
          </ContainerRow>
          <ContainerRow>
            <Text color={colors.orange} bold>
              PEGAR
            </Text>
            <Icon
              name="md-open-outline"
              color={colors.orange}
              size={15}
              style={{ marginLeft: 5 }}
            />
          </ContainerRow>
        </ContainerIcons>
      </ContainerTwo>
    </Container>
  );
};

export default Card;
