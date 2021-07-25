import * as S from "./styles";
import IncomeImg from "../../assets/income.svg";
import OutcomeImg from "../../assets/outcome.svg";
import Totalimg from "../../assets/total.svg";
import { useTransaction } from "../../hooks/useTransaction";
import Image from "next/image";
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
    <S.Container>
      <div>
        <header>
          <p>Entradas</p>
          <Image src={IncomeImg} width={12} height={12} alt="IncomeImg" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(sumary.deposits)}
        </strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <Image src={OutcomeImg} alt="OutcomeImg" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(sumary.withdraw)}
        </strong>
      </div>

      {/* verificar se o balanço é positivo e mudar a cor de fundo de acordo com o valor  */}
      <div className="highlight-background">
        <header>
          <p>Balanço</p>
          <Image src={Totalimg} alt="Totalimg" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(sumary.total)}
        </strong>
      </div>
    </S.Container>
  );
}
