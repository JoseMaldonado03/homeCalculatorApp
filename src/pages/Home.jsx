import {useEffect, useContext} from 'react';
import styled from 'styled-components/native';

import Form from '../components/Form';
import Logo from '../components/Logo';
import Lista from '../components/Lista';

import {UserContext} from '../context/UserContext';
import UserModal from '../components/UserModal';
import Result from '../components/Result';
import {BACKGROUND} from '../colors';
import {getData} from '../utils/storage';
import { ItemContext } from '../context/ItemContext';

const Container = styled.ScrollView`
  padding: 0 16px;
  font-size: 10px;
  width: 100%;
  height: 100%;
  background: ${BACKGROUND};
`;

const Header = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const UserButton = styled.TouchableOpacity`
  background: #984c22;
  color: #fff;
  border-radius: 16px;
  padding: 16px;
  font-weight: 500;
  border: 0px;
  transition: background-color 1s ease, color 1s ease;
  cursor: pointer;
  margin-top: 16px;

  &:hover {
    background: rgb(90, 41, 14);
  }

  @media (min-width: 960px) {
    margin: 0px;
  }
`;

const UserButtonText = styled.Text`
  color: #fff;
`;

function Home() {
  const {showModal, setShowModal, loadUsers} = useContext(UserContext);
  const {loadItems} = useContext(ItemContext);

  useEffect(() => {
    getData('users').then(users => loadUsers(users));
    getData('items').then(items => loadItems(items));
  }, []);

  return (
    <Container>
      <Header>
        <Logo />
        <UserButton onPress={() => setShowModal(true)}>
          <UserButtonText>Agregar Usuarios</UserButtonText>
        </UserButton>
      </Header>
      {showModal && <UserModal />}
      <Form />
      <Lista />
      <Result />
    </Container>
  );
}

export default Home;
