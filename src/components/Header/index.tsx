import { ContainerHeader, HeaderContent, NewTransactionButton } from "./styles";
import * as Dialog from "@radix-ui/react-dialog";

import LogoImg from "../../assets/logo.svg";
import { NewTransitionModal } from "../NewTransactionModal";

export function Header() {
  return (
    <ContainerHeader>
      <HeaderContent>
        <img src={LogoImg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransitionModal></NewTransitionModal>
        </Dialog.Root>
      </HeaderContent>
    </ContainerHeader>
  );
}
