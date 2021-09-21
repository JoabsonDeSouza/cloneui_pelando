/* eslint-disable react-native/no-inline-styles */
import { View, ScrollView } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Scissors from 'react-native-vector-icons/Entypo';

import {
  Container,
  ContainerImage,
  ImageHeader,
  ContainerInfo,
  Temperature,
  Text,
  ContainerInfoUser,
  Avatar,
  ContainerDiscount,
  ButtonGet,
  ButtonGetView,
  ContainerIcons,
} from './styles';
import colors from '../../styles/colors';

const Details = () => {
  const route = useRoute();
  const { item }: any = route.params;

  const navigation = useNavigation();

  return (
    <Container>
      <ScrollView contentContainerStyle={{ flex: 1, paddingBottom: 100 }}>
        <ContainerImage>
          <ImageHeader source={{ uri: item.image }} />
        </ContainerImage>
        <ContainerInfo>
          <Temperature>
            <Icon name="md-remove" size={20} color={colors.blue} />
            <Text color={colors.red}>{item.temperature}</Text>
            <Icon name="md-add" size={20} color={colors.red} />
          </Temperature>
          <View style={{ paddingVertical: 15, flexDirection: 'row' }}>
            <Text bold>promoções </Text>
            <Text bold color={colors.orange}>
              Americanas
            </Text>
          </View>

          <Text bold size={21}>
            {item.description}
          </Text>
          <View style={{ paddingVertical: 15, flexDirection: 'row' }}>
            <Text bold size={21} color={colors.orange}>
              {item.price}
            </Text>
          </View>
          <ContainerInfoUser>
            <View style={{ flexDirection: 'row' }}>
              <Avatar
                source={{
                  uri: item.avatar,
                }}
              />

              <View>
                <Text bold>{item.name}</Text>
                <Text color={colors.gray_text}>5 de Novembro 3:42</Text>
              </View>
            </View>
            <Icon name="person-add" size={23} color={colors.orange} />
          </ContainerInfoUser>

          <ContainerDiscount>
            <Scissors
              name="scissors"
              color={colors.orange}
              size={26}
              style={{
                position: 'absolute',
                left: 10,
                top: -15,
                backgroundColor: colors.gray_border,
              }}
            />
            <Text bold color={colors.orange} size={16}>
              BLACK20
            </Text>
          </ContainerDiscount>

          <ButtonGet>
            <Text bold color="white" size={18}>
              PEGAR
            </Text>
            <ButtonGetView>
              <Icon
                name="md-open-outline"
                color="white"
                size={25}
                style={{ marginLeft: 5 }}
              />
            </ButtonGetView>
          </ButtonGet>

          <ContainerIcons>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Icon name="md-bookmark" size={23} color={colors.gray_icon} />
              <Text color={colors.gray_icon}>Salvar</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Icon name="notifications" size={23} color={colors.gray_icon} />
              <Text color={colors.gray_icon}>Inscrever</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Icon name="share-social" size={23} color={colors.gray_icon} />
              <Text color={colors.gray_icon}>Compartilhar</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Icon name="download" size={23} color={colors.gray_icon} />
              <Text color={colors.gray_icon}>Baixar</Text>
            </View>
          </ContainerIcons>
        </ContainerInfo>
        <Icon
          name="chevron-back"
          size={35}
          color={colors.orange}
          style={{ position: 'absolute', top: 30, left: 10 }}
          onPress={() => navigation.goBack()}
        />
      </ScrollView>
    </Container>
  );
};

export default Details;
