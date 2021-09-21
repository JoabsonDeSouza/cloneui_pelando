import styled from 'styled-components/native';
import colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/Ionicons';

export const Container = styled.View`
  padding-top: 30px;
  min-height: 56px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.background_header};
`;

export const Text = styled.Text`
  color: white;
  font-size: 18px;
  padding-right: 5px;
`;

export const ContainerText = styled.View`
  flex-direction: row;
  flex: 2;
  align-items: center;
`;

export const ContainerIcons = styled.View`
  flex-direction: row;
  flex: 1.3;
  justify-content: space-around;
`;

export const MenuIcon = styled(Icon)`
  padding-left: 15px;
  padding-right: 25px;
  color: white;
`;

export const IconActions = styled(Icon)`
  color: white;
`;
