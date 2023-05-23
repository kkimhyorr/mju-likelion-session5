import Logo from "../assets/image/icon_logo.png";
import styled from "styled-components";
import Modal from "./Modal";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onModalClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen ? <Modal onModalClose={onModalClose} /> : null}
      <Block>
        <LogoImg src={Logo} />
        <MarginRightAuto>
          <MovieBtn>영화</MovieBtn>
          <TvBtn>TV</TvBtn>
          <TvBtn>책</TvBtn>
          <TvBtn>웹툰</TvBtn>
        </MarginRightAuto>
        <MarginTopAuto>
          <Search
            type="text"
            placeholder="🔍 콘텐츠, 인물, 컬렉션, 유저를 검색해보세요."
          />
          <LoginBtn onClick={() => setIsOpen(true)}>로그인</LoginBtn>
          <JoinBtn>회원가입</JoinBtn>
        </MarginTopAuto>
      </Block>
    </>
  );
};

const Block = styled.div`
  display: flex;
  margin-top: 10px;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.08);
`;

const LogoImg = styled.img`
  width: 150px;
  height: auto;
  margin: 15px 0px auto 50px;
  display: flex;
  margin-left: 30px;
`;

const MovieBtn = styled.button`
  /* width: 50px;
  height: 20px; */
  margin: auto;
  margin-left: 20px;
  background-color: white;
  border: 0px;
  font-size: 15px;
  display: flex;
  align-items: center;
`;

const TvBtn = styled.button`
  margin: 20px 0px;
  background-color: white;
  border: 0px;
  font-size: 15px;
  color: #7e7e7e;
  display: flex;
  align-items: center;
`;

const LoginBtn = styled.button`
  width: 50px;
  height: 20px;
  margin: 20px 20px;
  margin-left: 20px;
  color: #74747a;
  font-weight: 700;
  background-color: white;
  border: 0px;
`;

const JoinBtn = styled.button`
  width: 75px;
  height: 30px;
  margin: auto;
  margin-right: 50px;
  background-color: white;
  font-weight: 700;
  border: 1px solid #b9b9bc;
  border-radius: 13%;
`;

const Search = styled.input`
  width: 300px;
  height: 20px;
  margin: auto;
  margin-top: 10px;
  border: 0px;
  background-color: #f5f5f5;
  border-radius: 5px;
  color: #75757b;
  padding: 1em;
`;

const MarginRightAuto = styled.div`
  display: flex;
  margin-right: auto;
`;
const MarginTopAuto = styled.div`
  display: flex;
  margin-top: auto;
`;

export default Header;
