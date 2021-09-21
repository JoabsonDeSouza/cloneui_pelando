import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  padding-top: 30px;
  min-height: 56px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.background_header};
  border-color: ${colors.gray_border};
  border-bottom-width: 3px;
`;

export const Text = styled.Text`
  color: white;
  font-size: 18px;
  padding-right: 5px;
`;

interface ItemProps {
  border: boolean;
}

export const ContainerItem = styled.TouchableOpacity<ItemProps>`
  flex: 1;
  align-items: center;
  padding-left: 7px;
  padding-right: 7px;
  border-color: ${colors.orange};
  border-bottom-width: ${({ border }) => (border ? 3 : 0)}px;
`;
