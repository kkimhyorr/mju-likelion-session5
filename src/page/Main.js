import styled from "styled-components";

import Header from "../components/Header";
import Ranking from "../components/Ranking";
import Data from "../assets/Data";

const Block = styled.div`
  width: 100%;
`;

const Main = () => {
  return (
    <Block>
      <Header />
      <Ranking movieInfo={Data} />
    </Block>
  );
};

export default Main;
