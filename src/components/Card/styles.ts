import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  width: 100%;
  height: 200px;
  background-color: white;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 15px;
`;

export const ContainerOne = styled.View`
  flex: 5;
  flex-direction: row;
`;

export const ContainerImage = styled.View`
  flex: 1;
`;

export const ContainerDescription = styled.View`
  flex: 2;
`;

export const ContainerTwo = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 80%;
  height: 80%;
  border-radius: 4px;
`;

export const ContainerHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ContainerTime = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Temperature = styled.View`
  flex: 0.5;
  border-radius: 6px;
  border-width: 0.6px;
  border-color: ${colors.gray_icon};
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 7px;
  margin-bottom: 5px;
`;

interface TextProps {
  color?: string;
  bold?: boolean;
  size?: number;
}

export const Text = styled.Text<TextProps>`
  color: ${props => props.color || `${colors.black}`};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-size: ${props => props.size || 15}px;
`;

export const ContainerUser = styled.View`
  flex-direction: row;
  flex: 1;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin-right: 8px;
`;

export const ContainerIcons = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerRow = styled.View`
  flex-direction: row;
  align-items: center;
`;
