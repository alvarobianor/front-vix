import Modal from "react-modal";
import * as S from "./styles";
import CloseButtonImg from "../../assets/close.svg";
import IncomeSvg from "../../assets/income.svg";
import OutcomeSvg from "../../assets/outcome.svg";
import { FormEvent, useState } from "react";
import { useTransaction } from "../../hooks/useTransaction";
import Image from "next/image";
// Modal.setAppElement("#root");

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: ModalProps) {
  const [title, setTitle] = useState<string>("");
  const [value, setValue] = useState<number>(0);

  const [type, setType] = useState<string>("deposit");
  const [category, setCategory] = useState<string>("");

  const { CreateTransaction } = useTransaction();

  const handleConfirmTransaction = async (event: FormEvent) => {
    event.preventDefault();

    await CreateTransaction({ title, type, category, value });

    setCategory("");
    setTitle("");
    setType("deposit");
    setValue(0);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button>
        <Image
          src={CloseButtonImg}
          alt="CloseButton"
          className="close-button-modal"
          onClick={onRequestClose}
        />
      </button>

      <S.Container onSubmit={handleConfirmTransaction}>
        <h2>Cadastrar transação</h2>
        <input
          type="text"
          placeholder="Titulo"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
        />

        <S.ContainerButtonsType>
          <S.TypeButton
            type="button"
            isActive={type === "deposit"}
            onClick={() => type !== "deposit" && setType("deposit")}
            activeColor="green"
          >
            <Image src={IncomeSvg} alt="Income" />
            <span>Entrada</span>
          </S.TypeButton>

          <S.TypeButton
            type="button"
            isActive={type === "withdraw"}
            onClick={() => type !== "withdraw" && setType("withdraw")}
            activeColor="red"
          >
            <Image src={OutcomeSvg} alt="Outcome" />
            <span>Saída</span>
          </S.TypeButton>
        </S.ContainerButtonsType>
        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </S.Container>
    </Modal>
  );
}
