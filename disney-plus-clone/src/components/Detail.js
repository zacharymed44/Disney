import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import db from "../firebase";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    //grab movie info from db
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          //save movie data
          setMovie(doc.data());
        } else {
          //redirect to homepage
        }
      });
  }, [id]);

  return (
    <Container>
      {movie && (
        <>
          <Background>
            <img src={movie.backgroundImg} />
          </Background>

          <ImageTitle>
            <img src={movie.titleImg} />
          </ImageTitle>

          <Controls>
            <PlayButton>
              <img src="/disney-images/play-icon-black.png" />
              <span>PLAY</span>
            </PlayButton>
            <TrailerButton>
              <img src="/disney-images/play-icon-white.png" />
              <span>Trailer</span>
            </TrailerButton>
            <AddButton>
              <span>+</span>
            </AddButton>
            <GroupButton>
              <img src="/disney-images/group-icon.png" />
            </GroupButton>
          </Controls>

          <SubTitle>{movie.subTitle}</SubTitle>

          <Description>{movie.description}</Description>
        </>
      )}
    </Container>
  );
}
export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;
  margin-top: 60px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  display: flex;
  align-items: center;
  border-radius: 4px;
  font-size: 15px;
  padding: 0px 24px;
  margin-right: 24.2px;
  height: 56px;
  background: rgba(249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 2px solid white;
  background: rgb(0, 0, 0, 0.6);
  cursor: pointer;
  margin-right: 16px;

  span {
    font-size: 30px;
    color: white;
  }
`;

const GroupButton = styled(AddButton)`
  background: rgb(0, 0, 0);
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;

const Description = styled.div`
  line-height: 1.4;
  color: rgb(249, 249, 249);
  font-size: 20px;
  min-height: 20px;
  margin-top: 16px;
  max-width: 760px;
`;
