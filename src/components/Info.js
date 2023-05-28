import styled from "styled-components";

const Info = (props) => {
  const { poster_path, title, release_date, vote_average } = props.movie;
  const index = props.index;

  return (
    <Box>
      <ImgBox>
        <Rank>{index + 1}</Rank>
        <Img src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
      </ImgBox>
      <Title>{title}</Title>
      <Date>{release_date}</Date>
      <Average>{vote_average && `평점 ★${vote_average}`}</Average>
    </Box>
  );
};

const Box = styled.div`
  margin: 10px;
  width: 270px;
  position: relative;
  z-index: -1;
`;

const Rank = styled.p`
  width: 22px;
  height: 22px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-weight: 600;
  border-radius: 7px;
  text-align: center;
  position: absolute;
  margin-top: 3px;
  margin-left: 3px;
  padding: 4px;
`;

const Img = styled.img`
  width: 250px;
  height: auto;
  margin-bottom: 12px;
  vertical-align: middle;
  border-radius: 2%;
`;

const ImgBox = styled.div`
  position: relative;
`;

const Title = styled.div`
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Date = styled.div`
  font-weight: 500;
  font-size: 15px;
  color: #292a32;
`;

const Average = styled.div`
  font-weight: 500;
  font-size: 15px;
  color: #545765;
`;

export default Info;
