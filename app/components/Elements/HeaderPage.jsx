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
            <Img className="radius8" src={HeaderImage} alt="office" style={{zIndex: 9}} />
          </ImageWrapper>
        
        </RightSide>
      </HeaderWrapper>
    );
}