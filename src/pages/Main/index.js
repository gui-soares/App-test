import React, {useState} from 'react';
import {ActivityIndicator, StatusBar, Alert} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import UserCard from '~/components/UserCard';

import api from '~/services/api';

import {
  Container,
  Header,
  Title,
  Wrapper,
  Input,
  Button,
  CardList,
} from './styles';

export default function Main() {
  const [user, setUser] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  async function searchUser() {
    try {
      setLoading(true);
      const response = await api.get(`/users/${user}`);
      setUsers([...users, {...response.data}]);
      setUser('');
      setLoading(false);
    } catch (err) {
      setLoading(false);
      Alert.alert(
        'Erro na requisição',
        'Não foi possível adicionar o usuário.'
      );
    }
  }

  return (
    <Container>
      <StatusBar backgroundColor="#339c1c" barStyle="light-content" />
      <Header>
        <Title>GitHub Explorer</Title>
      </Header>
      <CardList>
        <Wrapper>
          <Input
            placeholder="Digite um usuário"
            value={user}
            autoCapitalize="none"
            onChangeText={setUser}
          />
          <Button onPress={searchUser}>
            {loading ? (
              <ActivityIndicator color="#fff" size={20} />
            ) : (
              <Icon name="add" size={20} color="#fff" />
            )}
          </Button>
        </Wrapper>
        {users.map(u => (
          <UserCard key={u.id} user={u} />
        ))}
      </CardList>
    </Container>
  );
}
