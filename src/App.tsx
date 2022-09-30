import { gql, useQuery } from "@apollo/client";
import Header from "./components/header";
import ListaProdutos from "./components/listaProdutos";
import Receita from "./components/Receita";
import * as C from "./style";
import { GetLessonQueryResponse } from "./types/type";

const QUERY = gql`
  query {
    produtos(stage: PUBLISHED) {
      id
      nomeProduto
      precoTotal
      custoProducao
    }
  }
`;

function App() {
  const { data } = useQuery<GetLessonQueryResponse>(QUERY);
  // console.log(data);

  return (
    <>
      {/*header component aqui */}
      <Header />
      {/* receita component aqui*/}
      <Receita />
      {/* list component aqui */}
      <ListaProdutos />
      {/* footer component */}
    </>
  );
}

export default App;
