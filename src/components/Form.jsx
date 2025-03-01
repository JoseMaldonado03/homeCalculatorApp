import {useState, useContext} from 'react';
import {Alert} from 'react-native';
import styled from 'styled-components/native';
import Entypo from '@react-native-vector-icons/entypo';
import FontAwesome5 from '@react-native-vector-icons/fontawesome5';
import {ALT_COLOR} from '../colors';
import {UserContext} from '../context/UserContext';
import {ItemContext} from '../context/ItemContext';
import RadioButton from './RadioButton';

const Container = styled.View`
  background: ${ALT_COLOR};
  padding: 10px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;

  @media (min-width: 960px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const FormText = styled.TextInput`
  border: 0px;
  background: transparent;
  padding: 16px 0;
  color: #fff;
  width: 100%;

  &::placeholder {
    color: #fff;
    opacity: 60%;
  }

  &:focus {
    outline: 0px;
  }

  @media (min-width: 960px) {
    border-right: 1px solid #fff;
    margin-right: 16px;
  }
`;

const FormNumber = styled(FormText).attrs({
  type: 'number',
  min: 0,
})`
  padding: 16px;
  font-size: 20px;
  width: 90%;
`;

const FormGroupNumber = styled.TouchableOpacity`
  border: 0px;
  background: transparent;
  padding: 16px;
  width: 90%;
  cursor: pointer;

  &::placeholder {
    color: #fff;
    opacity: 60%;
  }

  &:focus {
    outline: 0px;
  }

  @media (min-width: 960px) {
    border-right: 0;
    margin-right: 16px;
  }
`;

const FormGroupNumberText = styled.Text`
  color: #fff;
  font-size: 20px;
`;

const Button = styled.TouchableOpacity`
  background: #984c22;
  border-radius: 16px;
  padding: 16px;
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

const ButtonText = styled.Text`
  font-weight: 500;
  color: #fff;
  text-align: center;
`;

const Icon = styled.View`
  font-size: 21px;
  color: #fff;
`;

const FormGroup = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  flex-direction: row;
  border-bottom-color: #fff;
  border-bottom-width: 1px;

  @media (min-width: 960px) {
    border: 0px;
  }
`;

const UserPicker = styled.View`
  background: #fff;
  padding: 8px;
  min-width: 200px;

  @media (min-width: 960px) {
    top: 58px;
    left: -16px;
    min-width: 120px;
  }
`;

const UserPickerItem = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  padding-top: 4px;
  flex-direction: row;
`;

const UserPickerText = styled.Text`
  margin-left: 10px;
`;

function Form() {
  const [title, setTitle] = useState('');
  const [precio, setPrecio] = useState('');
  const [personas, setPersonas] = useState([]);
  const [showUserPicker, setShowUserPicker] = useState(false);

  const {addItem} = useContext(ItemContext);
  const {users} = useContext(UserContext);

  function guardaInfo(e) {
    if (!title) {
      return Alert.alert('Atencion!', 'Escriba el nombre del pago.');
    }

    if (personas.length == 0) {
      return Alert.alert('Atencion!', 'Agregue una o más personas.');
    }

    if (!precio) {
      return Alert.alert('Atencion!', 'Escriba el precio del pago.');
    }

    addItem({
      title,
      precio: parseInt(precio),
      personas,
    });

    setTitle('');
    setPrecio('');
    setPersonas([]);
  }

  const toggleUser = userIndex => {
    const userExistsInTheList = personas.findIndex(el => userIndex == el);

    if (userExistsInTheList >= 0) {
      return setPersonas(personas.filter(i => i != userIndex));
    }

    return setPersonas([...personas, userIndex]);
  };

  return (
    <Container>
      <FormText
        placeholder="Escriba el nombre del pago"
        value={title}
        onChangeText={e => setTitle(e)}
      />

      <FormGroup>
        <Icon>
          <FontAwesome5 name="money-bill-alt" size={24} color="#fff" />
        </Icon>
        <FormNumber
          value={precio}
          inputMode="numeric"
          placeholder="00,00"
          onChangeText={e => setPrecio(e)}
        />
      </FormGroup>

      <FormGroup>
        <Icon>
          <Entypo name="users" size={24} color="#fff" />
        </Icon>
        <FormGroupNumber onPress={() => setShowUserPicker(!showUserPicker)}>
          <FormGroupNumberText>{personas.length}</FormGroupNumberText>
        </FormGroupNumber>
      </FormGroup>

      {showUserPicker && (
        <UserPicker>
          {users.map((u, index) => (
            <UserPickerItem
              key={`form-userpickeritem-${index}`}
              onPress={() => toggleUser(index)}>
              <RadioButton checked={personas.find(i => i == index) >= 0} />
              <UserPickerText>{u}</UserPickerText>
            </UserPickerItem>
          ))}
          {users.length === 0 && (
            <UserPickerText>
              Oprima "Agregar Usuario" para añadir.
            </UserPickerText>
          )}
        </UserPicker>
      )}

      <Button onPress={guardaInfo}>
        <ButtonText>Guardar</ButtonText>
      </Button>
    </Container>
  );
}

export default Form;
