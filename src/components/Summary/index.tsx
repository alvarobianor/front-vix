import * as S from "./styles";
import IncomeImg from "../../assets/income.svg";
import OutcomeImg from "../../assets/outcome.svg";
import Totalimg from "../../assets/total.svg";
import { useTransaction } from "../../hooks/useTransaction";

export function Summary() {
  const { transactions } = useTransaction();

  const sumary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.value;
        acc.total += transaction.value;
      } else {
        acc.withdraw += transaction.value;
        acc.total -= transaction.value;
      }

      return acc;
    },
    {
      deposits: 0,
      withdraw: 0,
      total: 0,
    }
  );

  return (
    <S.ContainerB>
      <header>
        <p>Filtros:</p>
      </header>
      {/* <button>Pendente</button>
      <button>Concluído</button>
      <button>Cancelado</button> */}

      <select>
        <option value="PENDENTE">Pendente</option>
        <option value="CONCLUIDO">Concluido</option>
        <option value="CANCELADO">Cancelado</option>
      </select>

      {/* <strong>
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(sumary.deposits)}
        </strong> */}

      {/* <div>
        <header>
          <p>Saídas</p>
        </header>
        <strong>
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(sumary.withdraw)}
        </strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Balanço</p>
        </header>
        <strong>
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(sumary.total)}
        </strong>
      </div> */}
    </S.ContainerB>
  );
}
