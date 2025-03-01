import styled from 'styled-components/native';
import {ActivityIndicator} from 'react-native';
import Logo from './Logo';
import {BACKGROUND, LINK_COLOR} from '../colors';

const Container = styled.View`
  padding: 0 16px;
  font-size: 10px;
  width: 100%;
  height: 100%;
  background: ${BACKGROUND};
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Splashscreen() {
  return (
    <Container>
      <Logo />
      <ActivityIndicator size={30} color={LINK_COLOR} />
    </Container>
  );
}

export default Splashscreen;
