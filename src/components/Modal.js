import Logo from "../assets/image/icon_logo.png";
import styled from "styled-components";
import Kakao from "../assets/image/icon_kakao.png";
import Twitter from "../assets/image/icon_twitter.png";
import Google from "../assets/image/icon_google.png";
import Apple from "../assets/image/icon_apple.png";
import Line from "../assets/image/icon_line.png";

const Modal = ({ onModalClose }) => {
  return (
    <>
      <BackGround>
        <WhiteBox>
          <MarginRightAuto>
            <Out type="button" onClick={onModalClose}>
              X
            </Out>
          </MarginRightAuto>
          <LogoImg src={Logo}></LogoImg>
          <b>로그인</b>
          <Input type="text" placeholder="이메일" color="grey" />
          <Input type="text" placeholder="비밀번호" />
          <Button type="submit">
            <TextWhite>로그인</TextWhite>
          </Button>
          <Pink>비밀번호를 잊어버리셨나요?</Pink>
          <TextRow>
            <Grey>계정이 없으신가요? </Grey>
            <Pink>회원가입</Pink>
          </TextRow>
          <Grey>───────── OR ─────────</Grey>
          <Logos>
            <KakaoImg src={Kakao}></KakaoImg>
            <GoogleImg src={Google}></GoogleImg>
            <TwitterImg src={Twitter}></TwitterImg>
            <AppleImg src={Apple}></AppleImg>
            <LineImg src={Line}></LineImg>
          </Logos>
          <GreyBox>
            <Grey>
              TIP.왓챠 계정이 있으신가요? 왓챠와 왓챠피디아는 같은 계정을
              사용해요.
            </Grey>
          </GreyBox>
        </WhiteBox>
      </BackGround>
    </>
  );
};

const BackGround = styled.div`
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
`;
const WhiteBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  height: 630px;
  width: 350px;
  margin: 30px auto;
  border-radius: 7px;
`;

const Out = styled.button`
  font-size: 15px;
  margin: 5px 0px 0px 5px;
  border: 0px;
  background-color: white;
`;

const LogoImg = styled.img`
  width: 230px;
  height: auto;
  margin: 30px auto 20px;
`;

const Input = styled.input`
  width: 280px;
  height: 40px;
  margin: 10px 0px 0px;
  border: 0px;
  background-color: #f5f5f5;
  border-radius: 5px;
  padding-left: 20px;
`;

const Button = styled.button`
  width: 300px;
  height: 40px;
  margin: 20px;
  background-color: #ff2f6e;
  border: 0px;
  border-radius: 5px;
`;

const Logos = styled.div`
  width: 330px;
  display: flex;
  justify-content: space-around;
`;

const KakaoImg = styled.img`
  width: 50px;
  height: 50px;
`;

const GoogleImg = styled.img`
  width: 50px;
  height: 50px;
`;

const TwitterImg = styled.img`
  width: 50px;
  height: 50px;
`;

const AppleImg = styled.img`
  width: 50px;
  height: 50px;
`;

const LineImg = styled.img`
  width: 50px;
  height: 50px;
`;

const GreyBox = styled.div`
  width: 300px;
  height: 60px;
  background-color: #f7f7f7;
  color: #363638;
  margin: auto;
  border-radius: 7px;
  padding: 5px;
`;

const Pink = styled.div`
  color: #ff2f6e;
  font-size: 15px;
  margin-bottom: 10px;
  margin-top: 7px;
`;

const Grey = styled.div`
  color: #8d8d8d;
  font-size: 15px;
  margin-bottom: 20px;
  margin-right: 5px;
  margin-top: 7px;
  display: flex;
  flex-flow: row wrap;
  text-align: center;
`;

const TextWhite = styled.div`
  color: white;
  font-weight: bold;
`;

const TextRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const MarginRightAuto = styled.div`
  display: flex;
  margin-right: auto;
`;

export default Modal;
