import * as React from "react";

interface ItypeItem {
  nomeProduto: string;
  precoTotal: number;
  custoProducao: number;
  quantidade: number;
}
export type TodoContextType = {
  Item: ItypeItem[];
  updateItem: ({}: GetPropsResponse) => void;
};

interface GetPropsResponse {
  nomeProduto: string;
  precoTotal: number;
  quantidade: number;
  custoProducao: number;
}

export const TodoContext = React.createContext<TodoContextType | null>(null);

const TodoProvider: React.FC<React.ReactNode | any> = ({ children }) => {
  const [Item, setItem] = React.useState<ItypeItem[]>([
    {
      nomeProduto: "produto",
      precoTotal: 0,
      custoProducao: 0,
      quantidade: 0,
    },
  ]);

  const updateItem = (item: GetPropsResponse) => {
    setItem([
      {
        nomeProduto: `${item.nomeProduto}`,
        custoProducao: item.custoProducao,
        precoTotal: item.precoTotal,
        quantidade: item.quantidade,
      },
    ]);
  };

  return (
    <TodoContext.Provider value={{ Item, updateItem }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
