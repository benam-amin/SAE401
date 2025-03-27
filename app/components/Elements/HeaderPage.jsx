import {styled} from "styled-components";
import FullButton from "./FullButton";

export default function HeaderPage({h1, h1Green, description, headerImage}) {
    
    return (
      <HeaderWrapper className="container flexSpaceCenter">
        <LeftSide className="flexCenter">
          <div>
          <h1 className="extraBold font60">
            <span className="darkColor">{h1Green}</span> {h1}
          </h1>
            <HeaderP className="font15">
            {description}     
            </HeaderP>
            <BtnWrapper>
              <FullButton title="Voir Plus"/>
            </BtnWrapper>
          </div>
        </LeftSide>
        <RightSide>
          <ImageWrapper>
            <Img className="radius8" src={headerImage} alt="office" style={{zIndex: 9}} />
          </ImageWrapper>
        
        </RightSide>
      </HeaderWrapper>
    );
}

const HeaderWrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  max-width: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 960px) {
    width: 100%;
    text-align: center;
    align-items: center;
  }
`;

const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img = styled.img`
  max-width: 90%;
  height: auto;
  border-radius: 15px;
  @media (max-width: 560px) {
    width: 80%;
  }
`;
