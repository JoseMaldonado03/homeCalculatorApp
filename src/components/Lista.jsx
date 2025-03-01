import {useContext} from 'react';
import numeral from 'numeral';
import styled from 'styled-components/native';
import {ALT_COLOR} from '../colors';
import {ItemContext} from '../context/ItemContext';
import Entypo from '@react-native-vector-icons/entypo';

const Container = styled.View`
  margin-top: 16px;
`;

const Item = styled.View`
  border-bottom-color: ${ALT_COLOR};
  border-bottom-width: 1px;
  padding: 16px 0 4px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Title = styled.Text`
  font-size: 24px;
  margin: 0;
`;

const Valores = styled.View`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  flex-direction: row;
`;

const Division = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #6e6e6e;
  margin: 0;
  margin-right: 10px;

  @media (min-width: 960px) {
    font-size: 20px;
  }
`;

const Valor = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #000;
  margin: 0;

  @media (min-width: 960px) {
    font-size: 24px;
  }
`;

const Delete = styled.TouchableOpacity`
  margin: 8px 0px 0px 8px;
  padding: 0px;
  background: transparent;
  border: 0px;
  cursor: pointer;
  font-size: 24px;
`;

function Lista() {
  const {items, removeItem} = useContext(ItemContext);

  return (
    <Container>
      {items.map((i, index) => (
        <Item key={`lista-item-${i.title}-${index}`}>
          <Title>
            {index + 1}. {i.title}
          </Title>
          <Valores>
            <Division>
              {numeral(i.precio).format('$ 0,0.00')} / {i.personas.length} =
            </Division>
            <Valor>
              {numeral(i.precio / i.personas.length).format('$ 0,0.00')}
            </Valor>
            <Delete onPress={() => removeItem(index)}>
              <Entypo name="circle-with-cross" size={30} />
            </Delete>
          </Valores>
        </Item>
      ))}
    </Container>
  );
}

export default Lista;
