// import { Container } from './styles';
import * as S from "./styles";
import Logo from "../../assets/check.svg";
import Image from "next/image";
interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <S.Container>
      <S.Content>
        <div>
          <Image src={Logo} width={50} height={50} alt="Alvaro Todo" />
          <p>{`Todo list`}</p>
        </div>
        <button type="button" onClick={onOpenNewTransactionModal}>
          Cadastrar transação
        </button>
      </S.Content>
    </S.Container>
  );
}
