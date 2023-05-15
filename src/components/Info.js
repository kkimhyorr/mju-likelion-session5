import styled from "styled-components";

const Box = styled.div`
  margin: 10px;
  width: 270px;
  position: relative;
  z-index: -1;
`;

const Rank = styled.div`
  width: 30px;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-weight: 600;
  border-radius: 7px;
  text-align: center;
  position: absolute;
  margin-top: 3px;
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

const YearNCountry = styled.div`
  font-weight: 500;
  font-size: 15px;
  color: #292a32;
`;

const Average = styled.div`
  font-weight: 500;
  font-size: 15px;
  color: #545765;
`;

const PercentNAudience = styled.div`
  font-weight: 500;
  font-size: 15px;
  color: #76767c;
`;

const Info = (props) => {
  const { rank, img, title, year, country, average, percent, audience } =
    props.movie;

  const changeAudience = () => {
    return audience === ""
      ? null
      : parseInt(audience) >= 10000
      ? "누적 관객" + parseInt(audience) / 10000 + "만 명"
      : "누적 관객" + audience + "명";
  };

  const changeAverage = () => {
    return average === "" ? null : "평점★" + average;
  };

  return (
    <Box>
      <ImgBox>
        <Rank>{rank}</Rank>
        <Img src={img} style={{}} />
      </ImgBox>
      <Title>{title}</Title>
      <YearNCountry>
        {year} · {country}
      </YearNCountry>
      <Average>{changeAverage()}</Average>
      <PercentNAudience>
        예매율 {percent} · {changeAudience()}
      </PercentNAudience>
    </Box>
  );
};

export default Info;
