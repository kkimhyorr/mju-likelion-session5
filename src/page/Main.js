import styled from "styled-components";
import Ranking from "../components/Ranking";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { topRatedAtom } from "../atom/topRated";

const Main = () => {
  const [data, setData] = useState([]);
  const [topRated, setTopRated] = useRecoilState(topRatedAtom);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + process.env.REACT_APP_API_KEY,
    },
  };

  useEffect(() => {
    axios(
      "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1",
      options
    )
      .then((res) => {
        setData(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios(
      "https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1",
      options
    )
      .then((res) => {
        setTopRated(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Block>
      <Ranking movieInfo={data} />
    </Block>
  );
};

const Block = styled.div`
  width: 100%;
`;

export default Main;
