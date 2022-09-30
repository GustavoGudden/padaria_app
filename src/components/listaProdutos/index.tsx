import Receita from "../Receita";
import * as C from "./style";
import { TodoContext, TodoContextType } from "../../provider/itemProvider";
import React from "react";
import { gql, useQuery } from "@apollo/client";
import { GetLessonQueryResponse } from "../../types/type";
import { Plus } from "phosphor-react";

const QUERY = gql`
  query {
    produtos(stage: PUBLISHED) {
      id
      nomeProduto
      precoTotal
      custoProducao
      quantidade
    }
  }
`;

const Mutation = gql`
  mutation MyMutation {
    updateProduto(
      data: { quantidade: 1 }
      where: { id: "cl8g2r9wu46t50bm1dp8x0dq8" }
    )
  }
`;

function ListaProdutos() {
  const { data } = useQuery<GetLessonQueryResponse>(QUERY);

  const { updateItem } = React.useContext(TodoContext) as TodoContextType;

  const handleAddQuant = () => {
    useQuery(Mutation);
  };

  // funçao que altera o estado global com as informaçoe do novo item acionado
  const handleItemSelect = (
    produto: string,
    total: number,
    custo: number,
    quantidade: number
  ) => {
    updateItem({
      nomeProduto: `${produto}`,
      custoProducao: custo,
      precoTotal: total,
      quantidade: quantidade,
    });
  };
  return (
    <C.Container>
      <div>
        <h1>Produtos</h1>
      </div>

      {/* map para renderizar os item com o onclick para acionalos   */}
      {data?.produtos.map((item) => {
        return (
          <C.item key={item.id}>
            <h1
              onClick={() =>
                handleItemSelect(
                  item.nomeProduto,
                  item.precoTotal,
                  item.custoProducao,
                  item.quantidade
                )
              }
            >
              {item.nomeProduto}
            </h1>
            <p>Preço final:{item.precoTotal}</p>
            <p>Custo de Produção:{item.custoProducao}</p>
            <p>quantidade:{item.quantidade}</p>
            <div
              onClick={() => {
                handleAddQuant();
              }}
            >
              <Plus size={28} className="icone" color="#44CC11" />
            </div>
          </C.item>
        );
      })}
    </C.Container>
  );
}

export default ListaProdutos;
