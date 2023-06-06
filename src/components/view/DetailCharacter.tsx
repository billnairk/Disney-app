import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchDetailData } from "../../../api/fetchData";
import styled from "styled-components";

const DetailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  height: 100vh;
`;

const DetailDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 500px;
  height: 70vh;
  overflow-y: auto;
  border: 1px solid;
  border-radius: 5px;
  margin-top: 60px;
  padding: 20px;
`;

const DetailImg = styled.img`
  margin: 30px 0px 30px 0px;
  width: 200px;
  height: 200px;
  min-height: 200px;
  border-radius: 100px;
`;

const DetailLi = styled.li`
  border: 1px solid;
  border-radius: 5px;
  padding: 2px 4px 2px 4px;
  margin: 5px;
`;

const DetailName = styled.div`
  border: 1px solid;
  border-radius: 10px;
  padding: 5px 10px 5px 10px;
  margin-top: 20px;
`;

interface ICharDetail {
  id: number;
  films: string[];
  name: string;
  imageUrl: string;
  sourceUrl: string;
}

type IParams = {
  charId: string;
};

function DetailCharacter() {
  const { charId } = useParams<IParams>();
  const { isLoading, data } = useQuery<ICharDetail>(["CharDetail"], () =>
    fetchDetailData(charId!)
  );
  return (
    <DetailContainer>
      {isLoading ? (
        "...Detail Page Loading..."
      ) : (
        <DetailDiv>
          <DetailName>{data?.name}</DetailName>
          <DetailImg src={`${data?.imageUrl}`} />
          {data?.films.map((film, index) => (
            <DetailLi key={index}>{film}</DetailLi>
          ))}
        </DetailDiv>
      )}
    </DetailContainer>
  );
}

export default DetailCharacter;
