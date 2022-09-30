import * as C from "./style";
import { TodoContext, TodoContextType } from "../../provider/itemProvider";
import React from "react";
import { item } from "../listaProdutos/style";

function Receita() {
  const { Item } = React.useContext(TodoContext) as TodoContextType;

  return (
    <>
      {Item.map((i) => {
        return (
          <C.Container>
            <div>
              <h1>Produto Nome:</h1>
              <p>{i.nomeProduto}</p>
            </div>
            <div>
              <h1>Preço Final:</h1>
              <p>{i.precoTotal}</p>
            </div>
            <div>
              <h1>custo produçao:</h1>
              <p>{i.custoProducao}</p>
            </div>
            <div>
              <h1>entrada bruto:</h1>
              <p>{i.precoTotal * i.quantidade}</p>
            </div>
            <div>
              <h1>quantidade:</h1>
              <p>{i.quantidade}</p>
            </div>
            <div>
              <h1>lucro real:</h1>
              <p>{i.precoTotal - i.custoProducao}</p>
            </div>
          </C.Container>
        );
      })}
    </>
  );
}

export default Receita;
