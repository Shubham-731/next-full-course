import styled from "styled-components";

const CSSJS = () => {
  const Title = styled.h1`
    font-size: 40px;
    font-weight: bold;
  `;

  return (
    <>
      <div style={{ color: "#F143DF" }}>CSSJS</div>
      <Title>Styled components</Title>
    </>
  );
};
export default CSSJS;
