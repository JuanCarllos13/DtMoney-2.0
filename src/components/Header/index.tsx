import { ContainerHeader, HeaderContent, NewTransactionButton } from "./styles";

import LogoImg from '../../assets/logo.svg'

export function Header(){
  return (
    <ContainerHeader>
      <HeaderContent>

        <img src={LogoImg} alt=""/>
      <NewTransactionButton>Nova  Transação</NewTransactionButton>
      </HeaderContent>
    </ContainerHeader>
  )
}