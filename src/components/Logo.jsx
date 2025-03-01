import styled from 'styled-components/native';
import {ALT_COLOR} from '../colors';

const Container = styled.View`
  margin: 10px 10px 10px;
  display: flex;
  flex-direction: row;
  width: 45%;
`;

const BackgroundBall = styled.View`
  background: ${ALT_COLOR};
  width: 68px;
  height: 68px;
  border-radius: 44px;
  margin-right: -74px;
`;

const TitleGroup = styled.View``;

const Title = styled.Text`
  font-size: 30px;
`;

const Subtitle = styled(Title)`
  font-weight: bold;
`;

function Logo() {
  return (
    <Container>
      <BackgroundBall />
      <TitleGroup>
        <Title>home</Title>
        <Subtitle>Calculator</Subtitle>
      </TitleGroup>
    </Container>
  );
}

export default Logo;
