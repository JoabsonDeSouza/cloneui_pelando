import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
`;

export const ContainerImage = styled.View`
  flex: 1;
`;

export const ImageHeader = styled.Image`
  width: 100%;
  height: 100%;
`;

export const ContainerInfo = styled.View`
  flex: 2;
  padding: 15px;
`;

export const Temperature = styled.View`
  width: 30%;
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

export const ContainerInfoUser = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Avatar = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin-right: 8px;
`;

export const ContainerDiscount = styled.TouchableOpacity`
  margin-top: 30px;
  width: 100%;
  border-radius: 4px;
  border-color: ${colors.orange};
  border-width: 2px;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 10px;
  border-style: dotted;
  height: 50px;
`;

export const ButtonGet = styled.TouchableOpacity`
  margin-top: 30px;
  width: 100%;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.orange};
  height: 50px;
`;

export const ButtonGetView = styled.View`
  width: 15%;
  height: 100%;
  background: #00000050;
  position: absolute;
  right: 0;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  justify-content: center;
  align-items: center;
`;

export const ContainerIcons = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  padding-top: 25px;
`;
