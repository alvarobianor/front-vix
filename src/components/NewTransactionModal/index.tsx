import Modal from "react-modal";
import * as S from "./styles";
import CloseButtonImg from "../../assets/close.svg";
import { FormEvent, useState, useRef } from "react";
import { useTransaction } from "../../hooks/useTransaction";
import Image from "next/image";
import InputMask from "react-input-mask";
import MaskedInput from "react-text-mask";
Modal.setAppElement("#modal-root");

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: ModalProps) {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const [date, setDate] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  let dto = "";
  const { CreateTransaction } = useTransaction();

  const handleConfirmTransaction = async (event: FormEvent) => {
    event.preventDefault();

    await CreateTransaction({ title, date, description, status: "PENDENTE" });

    setDescription("");
    setTitle("");
    setStatus("PENDENTE");
    setDate("");
    onRequestClose();
  };

  // const Input = (props: any) => (
  //   <InputMask
  //     mask="99/99/9999"
  //     // alwaysShowMask={true}
  //     value={props.value}
  //     onChange={props.onChange}
  //   >
  //     {(inputProps: any) => (
  //       <input {...inputProps} disableUnderline placeholder="dia/mês/ano" />
  //     )}
  //   </InputMask>
  // );

  const Input = (props: any) => (
    <InputMask
      mask="99/99/9999"
      value={date}
      onChange={(event) => setDate(event.target.value)}
    />
  );

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <S.ButtonClose>
        <button>
          <Image
            src={CloseButtonImg}
            alt="CloseButton"
            // className="close-button-modal"
            onClick={onRequestClose}
          />
        </button>
      </S.ButtonClose>

      <S.Container onSubmit={handleConfirmTransaction}>
        <h2>Cadastrar Atividade</h2>
        <input
          type="text"
          placeholder="Titulo"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        {/* <S.ContainerButtonsType>
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
        </S.ContainerButtonsType> */}
        {/* <Input /> */}

        <MaskedInput
          mask={[
            "(",
            /[1-9]/,
            /\d/,
            /\d/,
            ")",
            " ",
            /\d/,
            /\d/,
            /\d/,
            "-",
            /\d/,
            /\d/,
            /\d/,
            /\d/,
          ]}
          onChange={(event: any) => setDate(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </S.Container>
    </Modal>
  );
}
