import * as C from "./style";
import { TodoContext, TodoContextType } from "../../provider/itemProvider";
import React, { useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import { GetLessonQueryResponse } from "../../types/type";
import { Plus } from "phosphor-react";
import addItem from "../updateItem";
import Teste from "../updateItem";
import AddItem from "../addItem";

function ListaProdutos() {
  const QUERY = gql`
    query {
      produtos(stage: DRAFT) {
        id
        nomeProduto
        precoTotal
        custoProducao
        quantidade
      }
    }
  `;
  const Mutation = gql`
    mutation muta($count: Int, $id: ID) {
      updateProduto(data: { quantidade: $count }, where: { id: $id }) {
        id
        quantidade
      }
    }
  `;

  const [active, setactive] = useState(false);
  const { data } = useQuery<GetLessonQueryResponse>(QUERY);

  const [mutateFunction, { loading, error }] = useMutation(Mutation);

  // if (loading) return "Submitting...";
  // if (error) return `Submission error! ${error.message}`;

  const { updateItem } = React.useContext(TodoContext) as TodoContextType;

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
              {/* <p>Custo de Produção:{item.custoProducao}</p> */}
              <p>quantidade:{item.quantidade}</p>
              <div>
                <Plus
                  size={28}
                  className="icone"
                  color="#849324"
                  onClick={() =>
                    mutateFunction({
                      variables: {
                        count: item.quantidade + 1,
                        id: item.id,
                      },
                    })
                  }
                />
              </div>
              {/* <Teste id={item.id} /> */}
            </C.item>
          );
        })}
      </div>

      <AddItem />
    </C.Container>
  );
}

export default ListaProdutos;
