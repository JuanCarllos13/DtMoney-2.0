import { ContainerHeader, HeaderContent, NewTransactionButton } from "./styles";
import * as Dialog from "@radix-ui/react-dialog";

import LogoImg from "../../assets/logo.svg";

export function Header() {
  return (
    <ContainerHeader>
      <HeaderContent>
        <img src={LogoImg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay/>
            <Dialog.Content>
              <Dialog.Title>Nova transação</Dialog.Title>
              <Dialog.DialogClose/>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </HeaderContent>
    </ContainerHeader>
  );
}
