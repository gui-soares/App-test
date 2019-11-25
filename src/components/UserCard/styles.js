import styled from 'styled-components/native';

export const Container = styled.View.attrs({
  elevation: 4,
})`
  background: #fff;
  flex-direction: row;
  padding: 10px 20px;
  align-self: center;
  width: 300px;
  min-height: 60px;
  border-radius: 4px;
  margin-bottom: 40px;
`;

export const Avatar = styled.Image`
  height: 40px;
  width: 40px;
  border-radius: 20px;
`;

export const Name = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const Repos = styled.Text`
  font-size: 14px;
  color: #999;
`;

export const Wrapper = styled.View`
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
`;
