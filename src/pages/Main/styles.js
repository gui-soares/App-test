import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const Header = styled.View`
  height: 60px;
  align-self: stretch;
  align-items: center;
  justify-content: center;
  background: #339c1c;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
`;

export const Input = styled.TextInput`
  height: 40px;
  width: 250px;
  padding: 0 15px;
  border: 1px #000;
  border-radius: 4px;
  background: transparent;
  font-size: 16px;
`;

export const Button = styled.TouchableOpacity`
  background: #339c1c;
  height: 40px;
  width: 40px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

export const CardList = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-bottom: 20px;
`;
