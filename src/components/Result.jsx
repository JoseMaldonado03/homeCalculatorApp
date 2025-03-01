import {useContext} from 'react';
import styled from 'styled-components/native';
import numeral from 'numeral';
import {BUTTON_COLOR} from '../colors';
import {ItemContext} from '../context/ItemContext';
import {UserContext} from '../context/UserContext';

const Container = styled.View`
  background: ${BUTTON_COLOR};
  padding: 16px;
  color: #fff;
  margin-top: 50px;
  border-radius: 16px;
  margin-bottom: 16px;
`;

const Total = styled.Text`
  font-size: 28px;
  margin: 0px;
  font-weight: bold;
  color: #fff;
`;

const Item = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #fff;
  padding: 16px 0 0;
  display: flex;
  flex-direction: row;
  font-size: 20px;
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.Text`
  color: #fff;
`;

const TotalPago = styled.Text`
  color: #fff;
  font-weight: bold;
`;

const ResetButton = styled.TouchableOpacity`
  background: #3e6347;
  border-radius: 20px;
  padding: 16px;
  margin: 32px 0 0;
`;

const ResetButtonText = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;

export default function Result() {
  const {getTotal, getTotalByUser, setItems} = useContext(ItemContext);
  const {users} = useContext(UserContext);

  if (getTotal() === 0) {
    return <></>;
  }

  return (
    <Container>
      <Total>Total: {numeral(getTotal()).format('$ 0,0.00')}</Total>

      {users.map((user, userIndex) => (
        <Item key={`result-item-${userIndex}`}>
          <Name>
            {userIndex + 1}. {user}
          </Name>
          <TotalPago>
            {numeral(getTotalByUser(userIndex)).format('$ 0,0.00')}
          </TotalPago>
        </Item>
      ))}

      <ResetButton onPress={() => setItems([])}>
        <ResetButtonText>Reempezar</ResetButtonText>
      </ResetButton>
    </Container>
  );
}
