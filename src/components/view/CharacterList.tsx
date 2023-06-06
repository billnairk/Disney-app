import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { fetchData } from "../../../api/fetchData";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const CharContainer = styled.div`
  border: 1px solid white;
  border-radius: 10px;
  height: 100%;
`;

const CharList = styled.ul`
  justify-content: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const CharDiv = styled.li`
  padding: 20px 10px 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    background: rgb(0, 0, 0, 0.5);
    border-radius: 10px;
  }
`;

const CharImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 100%;
  object-fit: cover;
`;

const CharNameSpan = styled.span`
  color: white;
  font-size: 20px;
  font-weight: 400;
  padding: 10px;
`;

interface IChar {
  id: number;
  imageUrl: string;
  name: string;
}

function CharacterList() {
  const { isLoading, data } = useQuery<IChar[]>(["CharList"], fetchData);
  return (
    <MainContainer>
      <CharContainer>
        {isLoading ? (
          "..LOADING"
        ) : (
          <CharList>
            {data?.slice(0, 100).map((char) => (
              <Link to={`/character/${char.id}`} key={char.id}>
                <CharDiv>
                  <CharImg src={char.imageUrl} />
                  <CharNameSpan>{char.name}</CharNameSpan>
                </CharDiv>
              </Link>
            ))}
          </CharList>
        )}
      </CharContainer>
    </MainContainer>
  );
}

export default CharacterList;
