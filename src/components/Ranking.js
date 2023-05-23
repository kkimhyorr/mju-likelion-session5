import { Link } from "react-router-dom";
import styled from "styled-components";
import Info from "./Info";

const Ranking = ({ movieInfo }) => {
  console.log(movieInfo);
  return (
    <>
      <Title>박스오피스 순위</Title>
      <Scroll>
        {movieInfo?.map((movie, index) => (
          <Link
            to={`${movie.id}`}
            style={{ textDecoration: "none", color: "Black" }}
            key={index}
          >
            <Info movie={movie} index={index} />
          </Link>
        ))}
      </Scroll>
    </>
  );
};

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
`;

export default Ranking;
