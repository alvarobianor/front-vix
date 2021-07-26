import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from "react";
import { api } from "../services/api";

interface Filter {
  filter: string;
}

interface TransactionsProps {
  _id: string;
  title: string;
  description: string;
  date: string;
  status: string;
  createdAt: string;
}

type TransactionInput = Omit<TransactionsProps, "_id" | "createdAt">;
type TransactionUpdate = Omit<
  TransactionsProps,
  "title" | "description" | "date" | "createdAt"
>;
interface TransactionProviderProps {
  children: ReactNode;
}

interface TransactionsData {
  transactions: TransactionsProps[];
  CreateTransaction: (transaction: TransactionInput) => Promise<void>;
  UpdateStatus: (transaction: TransactionUpdate) => Promise<void>;
  GetAllWithFilter: (filter: Filter) => Promise<void>;
}

const TransactionContext = createContext<TransactionsData>(
  {} as TransactionsData
);

// Usado na raiz dos componente no App, apenas!
export function Transactionprovider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<TransactionsProps[]>([]);

  useEffect(() => {
    api
      .get("/all")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  const CreateTransaction = async (transactionInput: TransactionInput) => {
    const response = await api.post("/", {
      ...transactionInput,
    });

    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  };

  const UpdateStatus = async (transactionUpdate: TransactionUpdate) => {
    const data = await api.put("/changeStatus", {
      transactionUpdate,
    });

    if (data.status === 200) {
      api
        .get("/all")
        .then((response) => setTransactions(response.data.transactions));
    }
  };

  const GetAllWithFilter = async ({ filter }: Filter) => {
    if (filter === "") return;
    api
      .get(`/all?filter=${filter}`)
      .then((response) => setTransactions(response.data.transactions));
  };

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        CreateTransaction,
        UpdateStatus,
        GetAllWithFilter,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransaction() {
  const context = useContext(TransactionContext);

  return context;
}
