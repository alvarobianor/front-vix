/* eslint-disable @typescript-eslint/no-unused-vars */
// import { Container } from './styles';
import * as S from "./styles";
import Logo from "../../assets/logo.svg";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <S.Container>
      <S.Content>
        <img src={Logo} alt="Alvaro Money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Cadastrar transação
        </button>
      </S.Content>
    </S.Container>
  );
}
