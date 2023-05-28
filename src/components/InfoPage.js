import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { topRatedAtom } from "../atom/topRated";
import { useRecoilValue } from "recoil";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const InfoPage = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  // const [movieId, setMovieId] = useState([]);

  const topRatedValue = useRecoilValue(topRatedAtom);
  const navigate = useNavigate();

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
        <BackDropImg
          src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
        ></BackDropImg>
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
            <div>
              <NormalInfo>기본정보</NormalInfo>
              <DetailedInfo>{data.title}</DetailedInfo>
              <DetailedInfo>{data.original_title}</DetailedInfo>
              <DetailedInfo>
                {data.release_date} ·{" "}
                {data.genres &&
                  data.genres.map((item) => item.name).join(" | ")}
              </DetailedInfo>
              <DetailedInfo>{data.runtime}분</DetailedInfo>
              <DetailedInfo>{data.overview}</DetailedInfo>
            </div>
          </InfoBox>

          <TopRatedBox>
            <TopRatedTopTitle>추천작</TopRatedTopTitle>
            {topRatedValue &&
              topRatedValue?.map((movie) => {
                return (
                  <TopRatedDetailBox
                    onClick={() => {
                      navigate(`/${movie.id}`);
                    }}
                  >
                    {/* <Link to={`${movie.id}`}> */}
                    <TopRatedPoster
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    ></TopRatedPoster>
                    <TopRatedTitle>{movie.title}</TopRatedTitle>
                    <TopRatedAverage>
                      평점 ★{movie.vote_average}
                    </TopRatedAverage>
                    {/* </Link> */}
                  </TopRatedDetailBox>
                );
              })}
          </TopRatedBox>
        </Column>
      </BackGround>
    </>
  );
};

const BackGround = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.08);
`;

const BackDropImg = styled.img`
  height: auto;
  width: 100%;
  margin-bottom: -500px;
  /* object-fit: cover; */
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

const Title = styled.p`
  font-size: 30px;
  font-weight: 900;
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
  height: auto;
  width: 50%;
  margin: 30px;
  margin-left: 150px;
  padding-bottom: 20px;
  border-radius: 0.5em;
  border: 1px solid rgba(0, 0, 0, 0.08);
`;

const Line = styled.div`
  background-color: rgba(0, 0, 0, 0.08);
  height: 1px;
  width: 90%;
  /* margin: 5px; */
  margin: 7px auto;
`;

const NormalInfo = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin: 20px 30px;
`;

const DetailedInfo = styled.div`
  font-size: 15px;
  font-weight: 500;
  margin: 3px 100px;
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

const TopRatedBox = styled.div`
  height: auto;
  width: 50%;
  background-color: white;
  margin: auto;
  margin-left: 150px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  border-radius: 0.5em;
`;

const TopRatedTopTitle = styled.p`
  width: 100%;
  height: 10px;
  color: black;
  font-size: 20px;
  font-weight: 700;
  /* margin-left: 30px; */
  margin: 25px 30px;
  /* margin-bottom: 50px; */
`;

const TopRatedDetailBox = styled.button`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 22%;
  margin: auto 10px;
`;

const TopRatedPoster = styled.img`
  height: auto;
  width: 85%;
  margin: auto;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 3%;
`;

const TopRatedTitle = styled.p`
  color: black;
  font-size: 15px;
  font-weight: 700;
  margin-left: 10px;
  margin-bottom: auto;
`;
const TopRatedAverage = styled.p`
  color: black;
  font-size: 13px;
  font-weight: 500;
  /* margin-top: 10px; */
  margin-left: 10px;
`;

export default InfoPage;
