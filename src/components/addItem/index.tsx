import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import * as C from "./style";

const ADD_NEW_PRODUTO = gql`
  mutation addProduto(
    $nome: String
    $venda: Int
    $producao: Int
    $quantidade: Int
  ) {
    createProduto(
      data: {
        custoProducao: $producao
        nomeProduto: $nome
        precoTotal: $venda
        quantidade: $quantidade
      }
    ) {
      id
    }
  }
`;

function AddItem() {
  const [nomeProduto, setNomeProduto] = useState("");
  const [precoVenda, setPrecoVenda] = useState(0);
  const [precoProducao, setPrecoProducao] = useState(0);
  const [quantidade, setQuantidade] = useState(0);

  const [mutateFunction, { loading, error }] = useMutation(ADD_NEW_PRODUTO);
  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  return (
    <C.CreatItemArea>
      <input
        type="text"
        placeholder="nome produto..."
        onChange={(e) => setNomeProduto(e.target.value)}
      />
      <input
        type="number"
        placeholder="preço venda..."
        onChange={(e) => setPrecoVenda(parseInt(e.target.value))}
      />
      <input
        type="number"
        placeholder="preço produção..."
        onChange={(e) => setPrecoProducao(parseInt(e.target.value))}
      />
      <input
        type="number"
        placeholder="quantidae..."
        onChange={(e) => setQuantidade(parseInt(e.target.value))}
      />
      <button
        onClick={() => {
          mutateFunction({
            variables: {
              nome: nomeProduto,
              venda: precoVenda,
              producao: precoProducao,
              quantidade: quantidade,
            },
          });
        }}
      >
        confirmar
      </button>
    </C.CreatItemArea>
  );
}

export default AddItem;
