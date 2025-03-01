import styled from 'styled-components/native';

import Entypo from '@react-native-vector-icons/entypo';

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: #000;
  border-width: 1px;
  width: 20px;
  height: 20px;
`;

export default function RadioButton({checked}) {
  return (
    <Container>
      {checked && <Entypo name="check" size={16} color="#000" />}
    </Container>
  );
}
