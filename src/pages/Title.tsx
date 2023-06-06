import styled from "styled-components";

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const TitleDiv = styled.div`
  padding: 20px;
  font-size: 48px;
  color: white;
`;

function Title() {
  return (
    <TitleContainer>
      <TitleDiv>Disney characters</TitleDiv>
    </TitleContainer>
  );
}

export default Title;
