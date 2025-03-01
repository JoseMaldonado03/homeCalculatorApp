import styled from 'styled-components/native';
import {BUTTON_COLOR} from '../colors';
import {useContext, useState} from 'react';
import {UserContext} from '../context/UserContext';
import Entypo from '@react-native-vector-icons/entypo';

const Container = styled.View`
  background: #fff;
  margin-bottom: 20px;
  padding: 16px;
  border-radius: 16px;
  z-index: 2;
`;

const Title = styled.Text`
  font-size: 18px;
  margin-bottom: 16px;
`;

const TitleGroup = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const Close = styled.TouchableOpacity`
  background: transparent;
  border: 0px;
  cursor: pointer;
  font-size: 24px;
  text-transform: uppercase;
  padding: 0px 0 0 30px;
`;

const Form = styled.View`
  background: ${BUTTON_COLOR};
  padding: 6px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const Input = styled.TextInput`
  width: 100%;
  background: transparent;
  border: 0px;
  color: #fff;

  &::placeholder {
    color: #fff;
    opacity: 60%;
  }

  &:focus {
    outline: none;
  }
`;

const Submit = styled.TouchableOpacity`
  border-radius: 8px;
  border: 0px;
  cursor: pointer;
  background: #3e6347;
  padding: 10px 10px;
  transition: background-color 1s ease, color 1s ease;

  &:hover {
    background: rgb(32, 57, 39);
  }
`;

const SubmitText = styled.Text`
  color: #fff;
  text-align: center;
`;

const Item = styled.View`
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
  font-size: 16px;
  flex-direction: row;
  align-items: center;
`;

const ItemText = styled.Text``;

const Borrar = styled.TouchableOpacity`
  border: 0px;
  cursor: pointer;
  padding: 10px;
`;

function UserModal() {
  const {setShowModal, addUser, removeUser, users} = useContext(UserContext);
  const [userName, setUserName] = useState('');

  return (
    <Container>
      <TitleGroup>
        <Title>Registro de usuario</Title>
        <Close onPress={() => setShowModal(false)}>
          <Title>x</Title>
        </Close>
      </TitleGroup>

      <Form>
        <Input
          value={userName}
          onChangeText={e => setUserName(e)}
          placeholder="Escriba el nombre del usuario"
        />
        <Submit
          onPress={() => {
            addUser(userName);
            setUserName('');
          }}>
          <SubmitText>Guardar</SubmitText>
        </Submit>
      </Form>

      {users.map((u, index) => (
        <Item key={`usermodel-item-${index}-${u}`}>
          <ItemText>
            {index + 1}. {u}
          </ItemText>
          <Borrar onPress={() => removeUser(index)}>
            <Entypo name="circle-with-cross" size={30} />
          </Borrar>
        </Item>
      ))}
    </Container>
  );
}

export default UserModal;
