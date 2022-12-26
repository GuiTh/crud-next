import Botao from "../components/Botao"
import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Cliente from "../core/Cliente"
import Formulario from "../components/Formulario"
import { useEffect, useState } from "react"
import ClienteRepositorio from "../core/ClienteRepositorio"
import ColecaoCliente from "../backend/db/ColecaoCliente"
import useCliente from '../hooks/useClientes'
import IndexHead from '../components/IndexHead'

export default function Home() {

  const { 
    tabelaVisivel,
    excluirCliente,
    selecionarCliente,
    salvarCliente,
    novoCliente,
    exibirTabela,
    cliente,
    clientes } = useCliente()
 
  return (
    <div className={`
    flex justify-center items-center h-screen 
    bg-gradient-to-r from-blue-500 to-purple-500 text-white
    `}>
      <IndexHead/>

      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
          <>
          <div className="flex justify-end">

            <Botao cor="gray" className="mb-4" 
            onClick={novoCliente}>
              Novo Cliente
              </Botao>

          </div>

          <Tabela clientes={clientes}
          clienteSelecionado={selecionarCliente}
          clienteExcluido={excluirCliente}></Tabela>
            </>    
        ):(
            <Formulario 
            cliente={cliente}
             clienteMudou={salvarCliente}
              cancelado={exibirTabela}/>
          )}
      </Layout>
    </div>
  )
}
