export interface GetLessonQueryResponse {
  produtos: [
    {
      id: string;
      nomeProduto: string;
      precoTotal: number;
      custoProducao: number;
      quantidade: number;
    }
  ];
}
