import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";

const InfoPage = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + process.env.REACT_APP_API_KEY,
    },
  };

  useEffect(() => {
    axios(`https:api.themoviedb.org/3/movie/${id}?language=ko-KR`, options)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <BackGround>
        <Column>
          <TitleBox>
            <Row>
              <Img
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
              ></Img>
              <ColumnNEnd>
                <Title>{data.title}</Title>
                <Row>
                  <Year> {data.release_date}</Year>
                  <Genre>
                    {data.genres &&
                      data.genres.map((item) => item.name).join(" | ")}
                  </Genre>
                </Row>
                <Average>평점 ★{data.vote_average}</Average>
              </ColumnNEnd>
            </Row>
          </TitleBox>
          <InfoBox>
            <Center>
              <div>
                <NormalInfo>기본정보</NormalInfo>
                <OriginalTitle>
                  <BoldText>원제 </BoldText>
                  {data.original_title}
                </OriginalTitle>
                <Line />
                <RunningTime>
                  <BoldText>상영시간 </BoldText> {data.runtime}분
                </RunningTime>
                <Line />
                <Description>
                  <BoldText>내용 </BoldText> {data.overview}
                </Description>
              </div>
            </Center>
          </InfoBox>
        </Column>
      </BackGround>
    </>
  );
};

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

export default InfoPage;
