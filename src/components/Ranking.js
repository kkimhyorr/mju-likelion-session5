import styled from "styled-components";
import Info from "./Info";

const Title = styled.div`
  font-size: 23px;
  font-weight: 900;
  margin-top: 20px;
  margin-left: 30px;
`;

const Scroll = styled.div`
  display: flex;
  overflow-x: scroll;
  width: 100%;
  height: 500px;
  /* border: 3px solid blue; */
`;

const Ranking = ({ movieInfo }) => {
  return (
    <>
      <Title>박스오피스 순위</Title>
      <Scroll>
        {movieInfo.map((movie) => (
          <Info movie={movie} />
        ))}
      </Scroll>
    </>
  );
};
export default Ranking;
