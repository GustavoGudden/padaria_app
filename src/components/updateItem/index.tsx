import { gql, useMutation, useQuery } from "@apollo/client";
import { Plus } from "phosphor-react";
import { GetLessonQueryResponse } from "../../types/type";
import { item } from "../listaProdutos/style";

const Mutation = gql`
  mutation muta($count: Int) {
    updateProduto(
      data: { quantidade: $count }
      where: { id: "cl8g2r9wu46t50bm1dp8x0dq8" }
    ) {
      id
      quantidade
    }
  }
`;

function Teste() {
  const [mutateFunction, { data, loading, error }] = useMutation(Mutation, {
    variables: {
      count: 5,
    },
  });

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  return (
    <>
      <div>
        <Plus
          size={28}
          className="icone"
          color="#44CC11"
          onClick={() => mutateFunction()}
        />
      </div>
    </>
  );
}

export default Teste;
