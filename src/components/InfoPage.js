import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import datas from "../assets/Data";

const BackGround = styled.div`
  background-color: rgba(0, 0, 0, 0.08);
  height: 100%;
  width: 100%;
`;

const TitleBox = styled.div`
  background-color: white;
  height: 250px;
  width: 100%;
  margin-top: 280px;
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  height: 300px;
  width: auto;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 3%;
  margin: -130px 30px 20px 100px;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 900;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const Rank = styled.div`
  font-size: 15px;
  font-weight: 500;
`;

const Percent = styled.div`
  font-size: 15px;
  font-weight: 500;
`;

const Audience = styled.div`
  font-size: 15px;
  font-weight: 500;
  margin-left: 10px;
`;

const Year = styled.div`
  font-size: 15px;
  font-weight: 500;
  margin: auto 10px auto 0px;
`;

const Genre = styled.div`
  font-size: 15px;
  font-weight: 500;
  margin: auto 10px;
`;

const Country = styled.div`
  font-size: 15px;
  font-weight: 500;
`;

const Average = styled.div`
  font-size: 15px;
  font-weight: 500;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const InfoBox = styled.div`
  background-color: white;
  height: 450px;
  width: 85%;
  display: flex;
  align-items: center;
  margin: 30px auto;
  border-radius: 0.5em;
  border: 1px solid rgba(0, 0, 0, 0.08);
`;

const NormalInfo = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Line = styled.div`
  background-color: rgba(0, 0, 0, 0.08);
  height: 1px;
  width: 70%;
  margin: 5px;
  margin: 7px auto;
`;

const OriginalTitle = styled.div`
  font-size: 17px;
  font-weight: 500;
`;

const RunningTime = styled.div`
  font-size: 17px;
  font-weight: 500;
`;

const Age = styled.div`
  font-size: 17px;
  font-weight: 500;
`;

const Description = styled.div`
  font-size: 17px;
  font-weight: 500;
  width: 70%;
  margin: auto auto;
  line-height: 24px;
`;

const BoldText = styled.div`
  font-weight: 700;
  font-size: 18px;
  display: contents;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const ColumnNEnd = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Center = styled.div`
  display: flex;
  text-align: center;
`;

const InfoPage = () => {
  const { rankP } = useParams();
  const Info = datas.filter((data) => data.rank === parseInt(rankP))[0];

  console.log(Info);
  const {
    rank,
    img,
    title,
    year,
    country,
    average,
    percent,
    audience,
    originalTitle,
    genre,
    runningTime,
    age,
    description,
  } = Info;

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
    <>
      <BackGround>
        <Column>
          <TitleBox>
            <Row>
              <Img src={img}></Img>
              <ColumnNEnd>
                <Row>
                  <Rank>예매 순위{rank}위</Rank>
                  <Percent>({percent})</Percent>
                  <Audience>{changeAudience()}</Audience>
                </Row>
                <Title>{title}</Title>
                <Row>
                  <Year> {year}</Year>
                  <Genre>{genre} </Genre>
                  <Country>{country}</Country>
                </Row>
                <Average>{changeAverage()}</Average>
              </ColumnNEnd>
            </Row>
          </TitleBox>
          <InfoBox>
            <Center>
              <div>
                <NormalInfo>기본정보</NormalInfo>{" "}
                <OriginalTitle>
                  <BoldText>원제 </BoldText>
                  {originalTitle}
                </OriginalTitle>
                <Line />
                <RunningTime>
                  <BoldText>상영시간 </BoldText> {runningTime}
                </RunningTime>
                <Line />
                <Age>
                  <BoldText>연령 등급 </BoldText> {age}
                </Age>
                <Line />
                <Description>
                  <BoldText>내용 </BoldText> {description}
                </Description>
              </div>
            </Center>
          </InfoBox>
        </Column>
      </BackGround>
    </>
  );
};

export default InfoPage;
